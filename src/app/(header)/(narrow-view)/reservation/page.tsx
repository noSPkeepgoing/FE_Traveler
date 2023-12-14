'use client';
import PurchaseInfo from './_components/purchase-info';
import ReservationItems from './_components/reservation-items';
import styles from './reservation.module.scss';
import Input from '@/components/atoms/input/index';
import Checkbox from '@/components/atoms/checkbox';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productState } from '@/recoil/order';
import Swal from 'sweetalert2';
import { usePostReservation } from '@/queries/reservation/useReservation';
import { TReservationItems } from '@/api/reservation/reservationApiType';
import { successProductsState } from '@/recoil/successProducts';
import { useEffect, useState } from 'react';
import { EMAIL_REGEX, NAME_REGEX } from '@/constants/regex';

function Reservation() {
  const router = useRouter();
  const products = useRecoilValue(productState);

  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');
    if (userEmail !== null && userName !== null) {
      setUserEmail(userEmail);
      setUserName(userName);
    }
  }, []);
  const setSuccessProducts = useSetRecoilState(successProductsState);
  if (products.length === 0 && typeof window !== 'undefined') {
    Swal.fire('선택된 상품이 없습니다');
    router.back();
  }

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (totalPrice, product) => totalPrice + product.accommodation_price,
      0,
    );
    return totalPrice;
  };

  const checkTermsOfService = (checked: FormDataEntryValue | null) => {
    if (checked === 'on') return true;
    return false;
  };

  const { mutate: postReservation } = usePostReservation({
    onSuccess() {
      Swal.fire('상품이 결제되었습니다');
      setOrderedItems();
    },
    onError(error) {
      Swal.fire('상품 결제에 실패했습니다');
    },
  });

  const setOrderedItems = () => {
    const successProducts = {
      representative_accommodation_name: products[0].accommodation_name,
      total_accommodation_num: products.length,
      total_price: calculateTotalPrice(),
    };
    setSuccessProducts(successProducts);
    if (typeof window !== 'undefined') {
      router.push('/reservation-check');
    }
  };

  const getParams = (name: string, email: string) => {
    const params: TReservationItems = products.map((product) => {
      return {
        accommodation_id: product.accommodation_id,
        people_number: product.people_number,
        start_date: product.start_date,
        end_date: product.end_date,
        representative_name: name,
        representative_email: email,
        order_price: product.accommodation_price,
        cart_id: product.cart_id,
      };
    });
    return params;
  };

  const reservation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    postReservation(getParams(name, email));
  };

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setIsNameValid(NAME_REGEX.test(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
    setIsEmailValid(EMAIL_REGEX.test(e.target.value));
  };

  const [isCheckedMain, setIsCheckedMain] = useState(false);
  const [isCheckedSub1, setIsCheckedSub1] = useState(false);
  const [isCheckedSub2, setIsCheckedSub2] = useState(false);

  const handleMainCheckboxChange = () => {
    const newCheckedState = !isCheckedMain;
    setIsCheckedMain(newCheckedState);
    setIsCheckedSub1(newCheckedState);
    setIsCheckedSub2(newCheckedState);
  };

  const handleSubCheckboxChange = (subNumber: number, checked: boolean) => {
    if (subNumber === 1) {
      setIsCheckedSub1(checked);
    } else {
      setIsCheckedSub2(checked);
    }

    if (!checked) {
      setIsCheckedMain(false);
    }
  };

  useEffect(() => {
    if (isCheckedSub1 && isCheckedSub2) {
      setIsCheckedMain(true);
    }
  }, [isCheckedSub1, isCheckedSub2]);

  return (
    <>
      <form onSubmit={reservation}>
        <div className={styles.content}>
          <div className={styles.parts}>
            <Text fontSize="md" fontWeight="bold">
              상품 정보
            </Text>
            <div className={styles.grayLine}></div>
            <Text fontSize="xs" fontWeight="normal">
              숙소
            </Text>
            <ReservationItems products={products} />
          </div>

          <div className={styles.parts}>
            <div className={styles.container}>
              <Text fontSize="md" fontWeight="bold">
                예약자 정보
              </Text>
              <div className={styles.container}>
                <div className={styles.sameLine}>
                  <Text fontSize="sm" fontWeight="normal" color="blackAlpha200">
                    예약자
                  </Text>
                  <Text fontSize="sm" fontWeight="normal" color="primary">
                    {userName}
                  </Text>
                </div>
                <div className={styles.sameLine}>
                  <Text fontSize="sm" fontWeight="normal" color="blackAlpha200">
                    이메일
                  </Text>
                  <Text fontSize="sm" fontWeight="normal" color="primary">
                    {userEmail}
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.parts}>
            <div className={styles.container}>
              {/* <Text fontSize='md' color='black' /> */}
              <Text fontSize="md" fontWeight="bold">
                대표자 정보
              </Text>
              <div className={styles.container}>
                <div className={styles.sameLine}>
                  <Text fontSize="sm" fontWeight="normal" color="blackAlpha200">
                    대표자
                  </Text>
                  <Input
                    variant="reservation"
                    placeholder="홍길동"
                    id="name"
                    name="name"
                    value={userName}
                    onChange={handleNameChange}
                  />
                </div>
                <div className={styles.sameLine}>
                  <Text fontSize="sm" fontWeight="normal" color="blackAlpha200">
                    이메일
                  </Text>
                  <Input
                    variant="reservation"
                    placeholder="abc@naver.com"
                    id="email"
                    name="email"
                    value={userEmail}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.parts}>
            <PurchaseInfo price={calculateTotalPrice().toLocaleString()} />
          </div>

          <div className={styles.parts}>
            <div className={styles.sameLine}>
              <Checkbox
                id="checkMain"
                name="check"
                isChecked={isCheckedMain}
                onChange={handleMainCheckboxChange}
              />
              <Text fontSize="md" fontWeight="bold">
                필수약관 동의
              </Text>
            </div>

            <div className={styles.container}>
              <div className={styles.sameLine}>
                <Checkbox
                  id="checkSub1"
                  name="check"
                  isChecked={isCheckedSub1}
                  onChange={() => handleSubCheckboxChange(1, !isCheckedSub1)}
                />
                만 14세 이용 동의
              </div>
              <div className={styles.sameLine}>
                <Checkbox
                  id="checkSub2"
                  name="check"
                  isChecked={isCheckedSub2}
                  onChange={() => handleSubCheckboxChange(2, !isCheckedSub2)}
                />
                개인 정보 수집 동의
              </div>
            </div>
          </div>
          <div className={styles.parts}>
            <Button
              variant="default"
              size="xl"
              type="submit"
              disabled={!isCheckedMain || !isNameValid || !isEmailValid}>
              <Text fontSize="xs" fontWeight="normal" color="white">
                결제하기
              </Text>
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Reservation;
