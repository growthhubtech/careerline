import { type ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'transparent' | 'secondary';
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  border?: 'dotted' | 'solid';
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  type = 'button',
  isLoading = false,
  border,
  onClick,
  className,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  const combinedClassName = ['container', `${variant}`, border && `${border}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button'}
      onClick={onClick}
      disabled={isDisabled}
      className={combinedClassName}
    >
      {children}
      {isLoading && <span className="loader" />}
    </button>
  );
};
