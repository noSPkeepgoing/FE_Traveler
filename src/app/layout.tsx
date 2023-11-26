import type { Metadata } from 'next';
import '@styles/_reset.scss';

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
      <body>{children}</body>
    </html>
  );
}
