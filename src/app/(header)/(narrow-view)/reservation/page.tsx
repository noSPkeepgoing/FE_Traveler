'use client';
import SubmitButton from './_components/submit-button';
import PurchaseInfo from './_components/purchase-info';
import ReservationItems from './_components/reservation-items';
import styles from './reservation.module.scss';
import Input from '@/components/atoms/input/index';
import Checkbox from '@/components/atoms/checkbox';
import Text from '@/components/atoms/text';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { productState } from '@/recoil/order';
import Swal from 'sweetalert2';
import { usePostReservation } from '@/queries/reservation/useReservation';
import { TReservationItems } from '@/api/reservation/reservationApiType';
import { successProductsState } from '@/recoil/successProducts';
import { useEffect, useState } from 'react';
import { TProduct } from '@/recoil/productType';

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

  const checkEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return false;
    if (!emailRegex.test(email)) return;
    return true;
  };

  const checkName = (name: string) => {
    if (!name) return false;
    return true;
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
    if (!checkName(name)) return Swal.fire('이름을 작성해주세요!');
    if (!checkEmail(email)) return Swal.fire('이메일 형식에 맞게 작성해주세요');

    if (!checkTermsOfService(data.get('check')))
      return Swal.fire('약관을 동의해주세요!');
    postReservation(getParams(name, email));
  };

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
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.parts}>
            <PurchaseInfo price={calculateTotalPrice().toLocaleString()} />
          </div>

          <div className={styles.parts}>
            <Text fontSize="md" fontWeight="bold">
              필수약관 동의
            </Text>
            <div className={styles.terms}>
              <Checkbox id="check" name="check" />만 14세 이용 동의
            </div>
          </div>
          <SubmitButton />
        </div>
      </form>
    </>
  );
}

export default Reservation;
