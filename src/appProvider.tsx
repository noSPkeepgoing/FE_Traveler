'use client';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  
  return (
    <RecoilRoot >
      {children}
    </RecoilRoot>
  );
};