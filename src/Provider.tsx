'use client';
import { ReactNode, useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import styles from '@/styles/mobile.module.scss';
import Text from './components/atoms/text';
import { usePathname, useRouter } from 'next/navigation';

export const Provider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  const router = useRouter();

  const refreshToken = sessionStorage.getItem('refreshToken');
  const pathArray = [
    '/cart',
    '/reservation',
    '/reservation-check',
    '/reservation-list',
  ];

  if (!refreshToken && pathArray.includes(pathName)) {
    // 리프레시 토큰 X (로그인 안했을때)
    return router.push('/sign-in');
  }

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 20,
          },
        },
      }),
  );
  const [mobile, setMobile] = useState<boolean>(false);

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {mobile ? (
          <div className={styles.moblie}>
            <div className={styles.moblie__text}>
              <Text fontSize="xs-2" fontWeight="semibold">
                모바일 서비스 준비중입니다.
              </Text>
              <Text fontSize="xs-2">웹페이지로 다시 접속해주세요!</Text>
            </div>
          </div>
        ) : (
          children
        )}
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
