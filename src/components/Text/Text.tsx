import type { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';

export interface TextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  variant?: 'primary' | 'secondary' | 'white' | 'error' | 'black';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  onClick?: () => void;
}

export const Text = ({
  children,
  className,
  style,
  variant = 'primary',
  weight = 'normal',
  size,
  align,
  truncate,
  onClick,
}: TextProps) => {
  const classes = classNames(
    size && `text-${size}`,
    variant && `text-${variant}`,
    weight && `font-${weight}`,
    align && `text-${align}`,
    truncate && 'text-truncate',
    onClick && 'text-clickable',
    className,
  );

  return (
    <div className={classes} style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export const ExtraSmallText = ({ size = 'xs', ...props }: TextProps) => (
  <Text size={size} {...props} />
);

export const SmallText = ({ size = 'sm', ...props }: TextProps) => <Text size={size} {...props} />;

export const BodyText = ({ size = 'base', ...props }: TextProps) => <Text size={size} {...props} />;

export const MediumText = ({ size = 'lg', ...props }: TextProps) => <Text size={size} {...props} />;

export const SubheadingText = ({ size = 'xl', ...props }: TextProps) => (
  <Text size={size} {...props} />
);

export const HeadingText = ({ size = '2xl', ...props }: TextProps) => (
  <Text size={size} {...props} />
);

export const PageTitleText = ({ size = '3xl', ...props }: TextProps) => (
  <Text size={size} {...props} />
);

export const HeroText = ({ size = '4xl', ...props }: TextProps) => <Text size={size} {...props} />;

export const DisplayText = ({ size = '5xl', ...props }: TextProps) => (
  <Text size={size} {...props} />
);
