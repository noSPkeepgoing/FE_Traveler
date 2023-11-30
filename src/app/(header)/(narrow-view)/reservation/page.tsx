'use client';
import Button from '@/components/atoms/button/index';
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
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
    router.push('/main');
  }

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (totalPrice, product) => totalPrice + product.accommodation_price,
      0,
    );
    return totalPrice;
  };

  const checkEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 유효성 검사용 정규식
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
    console.log(getParams(name, email));
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

            <section className={styles.reservationItemContainer}>
              {products?.map((item) => (
                <div className={styles.reservationItem}>
                  <div className={styles.itemInfo}>
                    <div className={styles.imageInfo}>
                      <Image
                        src={item.accommodation_img}
                        width={80}
                        height={80}
                        alt="숙소 이미지"
                        className={styles.accommodationImage}
                      />
                      <div className={styles.detailInfo}>
                        <Text fontSize="xs" fontWeight="bold">
                          {item.accommodation_name}
                        </Text>
                        <Text
                          fontSize="xs-3"
                          fontWeight="medium"
                          color="blackAlpha100">
                          {`${item.start_date} ~ ${item.end_date} / ${item.people_number}명`}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceInfo}>
                    <Text fontSize="md" fontWeight="medium">
                      {`${item.accommodation_price}원`}
                    </Text>
                    <Text fontSize="xs-3" fontWeight="normal" color="red200">
                      취소 및 환불 불가
                    </Text>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className={styles.parts}>
            <div className={styles.container}>
              {/* <Text fontSize='md' color='black' /> */}
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
                    id="name"
                    name="name"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.parts}>
            <Text fontSize="md" fontWeight="bold">
              결제 정보
            </Text>
            <div className={styles.grayLine}></div>
            <div className={styles.totalPrice}>
              <Text fontSize="sm" fontWeight="medium" color="primary">
                총 결제 금액
              </Text>
              <Text fontSize="sm" fontWeight="medium" color="highlight">
                {`${calculateTotalPrice()}원`}
              </Text>
            </div>
          </div>

          <div className={styles.parts}>
            {/* <Checkbox onChange={} isChecked={}/> */}
            <Text fontSize="md" fontWeight="bold">
              필수약관 동의
            </Text>
            <div className={styles.terms}>
              <Checkbox id="check" name="check" />만 14세 이용 동의
            </div>
          </div>

          <div className={styles.parts}>
            <Button variant="default" size="xl" type="submit">
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
