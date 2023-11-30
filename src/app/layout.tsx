import type { Metadata } from 'next';
import '@styles/_reset.scss';
import { Provider } from '@/Provider';

export const metadata: Metadata = {
  title: 'Traveler',
  description: '당신의 여행을 함께합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
