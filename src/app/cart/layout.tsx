import React from 'react';
import './cart.scss';

function CartLayout({ children }: { children: React.ReactNode }) {
  return <main className="frame">{children}</main>;
}

export default CartLayout;
