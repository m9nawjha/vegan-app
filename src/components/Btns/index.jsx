import React from 'react';
import './style.css'
export const Btn1 = ({ btnHref, children, variant }) => {
  return (
    <a
      href={btnHref}
      className={`Btn1 ${variant === 'btn1__md' ? 'btn1__md' : 'btn1__lg'}`}>
      {children}
    </a>
  );
};

export const Btn2 = ({ btnHref, children }) => {
  return (
    <a
      href={btnHref}
      className='btn2'>
      {children}
    </a>
  );
};