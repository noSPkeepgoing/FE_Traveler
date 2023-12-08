import { deleteCookie } from '@/constants/cookie';
import { AxiosInstance } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Swal from 'sweetalert2';

export const signOut = async (
  router: AppRouterInstance,
  setIsOnline: React.Dispatch<React.SetStateAction<boolean>>,
  instance: AxiosInstance,
) => {
  try {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      Swal.fire({
        title: '로그아웃 하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '로그아웃',
        cancelButtonText: '취소',
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire('로그아웃 되었습니다.', ' ', 'success');
          let headers = { Authorization: `Bearer ${accessToken}` };
          await instance.post<Response>('v1/member/logout', {}, { headers });
          if (accessToken) {
            sessionStorage.clear();
            deleteCookie('refreshToken');
            setIsOnline(false);
            router.push('/main');
          }
        }
      });
    }
  } catch (error) {
    throw new Error('로그아웃 실패.');
  }
};
