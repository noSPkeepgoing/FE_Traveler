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

function Reservation() {
  const products = useRecoilValue(productState);
  const userEmail = sessionStorage && sessionStorage.getItem('userEmail');
  const userName = sessionStorage && sessionStorage.getItem('userName');
  const setSuccessProducts = useSetRecoilState(successProductsState);
  const router = useRouter();
  if (products.length === 0) {
    Swal.fire('선택된 상품이 없습니다');
    //router.push('/main');
  }

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (totalPrice, product) => totalPrice + product.accommodation_price,
      0,
    );
    return totalPrice;
  };

  const checkEmail = (email: string) => {
    if (!email) return false;
    const regex =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (regex.test(email)) return false;
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
    onError() {
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
    router.push('/reservation-check');
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
            <Text fontSize="md" fontWeight="normal">
              상품 정보
            </Text>
            <div className={styles.grayLine}></div>
            <Text fontSize="xs" fontWeight="normal">
              숙소
            </Text>

            {products.map((product, index) => {
              return <div key={index}>{product.accommodation_name}</div>;
            })}
          </div>

          <div className={styles.parts}>
            <div className={styles.container}>
              {/* <Text fontSize='md' color='black' /> */}
              <Text fontSize="md" fontWeight="normal">
                예약자 정보
              </Text>
              <div className={styles.container}>
                <div className={styles.booker}>예약자</div>
                <div>{userName}</div>
                <div className={styles.booker}>이메일</div>
                <div>{userEmail}</div>
              </div>
            </div>
          </div>

          <div className={styles.parts}>
            <div className={styles.container}>
              {/* <Text fontSize='md' color='black' /> */}
              <Text fontSize="md" fontWeight="normal">
                대표자 정보
              </Text>
              <div className={styles.container}>
                대표자
                <Input
                  variant="reservation"
                  placeholder="홍길동"
                  id="name"
                  name="name"
                />
                이메일
                <Input
                  variant="reservation"
                  placeholder="abc@naver.com"
                  id="email"
                  name="email"
                />
              </div>
            </div>
          </div>

          <div className={styles.parts}>
            <Text fontSize="md" fontWeight="normal">
              결제 정보
            </Text>
            <div className={styles.grayLine}></div>
            <div className={styles.totalPrice}>
              <div>총 결제 금액</div>
              <div>{`${calculateTotalPrice()}원`}</div>
            </div>
          </div>

          <div className={styles.parts}>
            {/* <Checkbox onChange={} isChecked={}/> */}
            <Text fontSize="md" fontWeight="normal">
              필수약관 동의
            </Text>
            <div>
              <Checkbox id="check" name="check" />
              개인 정보 수집 동의
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
