'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import styles from './signUpForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import { TReservation } from '@/api/reservation/reservationApiType';
import Input from '@/components/atoms/input';
import { RESERVATION_API } from '@api/reservation';
import { RESPONSE_CODE } from '@constants/api';
import { isAxiosError } from 'axios';
import { Response } from '@/api/type';
import Swal from 'sweetalert2';

function SignUpForm() {
  
  /* -------------------- 결제하기 submit 핸들러 함수 --------------------*/

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // form 데이터 Target함수 => 예약될 숙소 리스트
    const formData = new FormData(event.currentTarget);
    const userData: TReservation = {
      accommodation_id: formData.get('accomodation_id') as number;
      people_number: formData.get('people_number') as number;
      start_date: formData.get('start_date') as Date;
      end_date: formData.get('end_date') as Date;
      representative_name: formData.get('representative_name') as string;
      representative_email: formData.get('representative_email') as string;
      order_price: formData.get('order_price') as number;
      cart_id: formData.get('cart_id') as string;
    };
    // 객체 분해 할당으로 비밀번호 확인만 제외하고 apiData라는 객체에 할당! (api 전달용)
    const {...apiData } = userData;

    // 예약자 이메일 유효성 검사 실시
    // if (!/(?=.*[a-zA-Z])(?=.*[0-9]).{5,}/.test(sessionStorage.getItem('userEmail')) {
    //   setMessageAndHideAfterDelay(
    //     setPasswordMessage,
    //     '비밀번호는 영문자와 숫자를 포함한 최소 5글자 이상이어야 합니다.',
    //     true,
    //   );
    //   return;
    // } 

    // 회원가입 API 호출
    try {
      const response = await RESERVATION_API.postReservation(userData);
      const responseCode = response.data.code;
      switch (responseCode) {
        case RESPONSE_CODE.SIGNUP_SUCCESS: // 회원가입 성공
          window.location.href = '/reservation-check';
          break;
      }
    } catch (error: unknown) {
      if (isAxiosError<Response>(error)) {
        if (error.response) {
          const responseCode = error.response.data.code;
          switch (responseCode) {
            case RESPONSE_CODE.UNAVAILABLE_DATE: // 해당 숙소의 예약 날짜 품절
              Swal.fire('해당 숙소의 예약 날짜가 품절되었습니다');
              break;
            case RESPONSE_CODE.NOT_FOUND_ITEM: // 주문한 해당 숙소가 없는 경우
              Swal.fire('해당 숙소가 없습니다');
              break;
          }
        }
      }
    }
  };

  /* -------------------- 이메일 중복확인 핸들러 함수 -------------------- */

  // const checkEmailValid = async () => {
  //   const formElement = document.querySelector('form');
  //   const formData = new FormData(formElement as HTMLFormElement);
  //   const email = formData.get('email');

  //   if (typeof email === 'string') {
  //     // 이메일 형식 유효성 검사
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(email)) {
  //       setMessageAndHideAfterDelay(
  //         setEmailMessage,
  //         '올바르지 않은 이메일 형식입니다.',
  //         true,
  //       );
  //       return;
  //     }
  //     }
  //   }
  };
  return (
    <>
    </>
  );
//}

export default SignUpForm;
