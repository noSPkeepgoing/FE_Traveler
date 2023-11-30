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
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
