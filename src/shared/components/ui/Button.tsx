import React from 'react';

import '@/shared/styles/ui/button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'cancel' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ 
  variant = 'secondary',   
  size = 'md',
  type = 'button',
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  return (
    <button 
      type={ type }
      className={`btn btn--${ variant } btn--${ size } ${ className }`.trim()} 
      { ...props }
    >
      { children }
    </button>
  );
};