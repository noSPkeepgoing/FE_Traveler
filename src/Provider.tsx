'use client';
import { ReactNode, useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { useMediaQuery } from 'react-responsive';

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
        {mobile ? <div>모바일 반응형은 아직 지원하지 않습니다</div> : children}
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
