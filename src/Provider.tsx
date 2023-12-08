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
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {isMobile ? (
          <div className={styles.mobile}>
            <div className={styles.mobileText}>
              <Text fontSize="xs-2" fontWeight="semibold">
                모바일 서비스 준비중입니다.
              </Text>
              <Text fontSize="xs-2">PC환경으로 다시 접속해주세요!</Text>
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
