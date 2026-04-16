import type { CSSProperties, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'div';

export interface TextProps {
  children: ReactNode;
  as?: TextElement;
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
  as,
  className,
  style,
  variant = 'primary',
  weight = 'normal',
  size,
  align,
  truncate,
  onClick,
}: TextProps) => {
  // TextElement is a string subset of ElementType; the cast lets TypeScript
  // treat the variable as a valid JSX tag name.
  const Tag = (as ?? 'span') as ElementType;

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
    <Tag className={classes} style={style} onClick={onClick}>
      {children}
    </Tag>
  );
};

export const ExtraSmallText = ({ as = 'span', size = 'xs', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const SmallText = ({ as = 'span', size = 'sm', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const BodyText = ({ as = 'p', size = 'base', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const MediumText = ({ as = 'p', size = 'lg', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const SubheadingText = ({ as = 'h3', size = 'xl', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const HeadingText = ({ as = 'h2', size = '2xl', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const PageTitleText = ({ as = 'h1', size = '3xl', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const HeroText = ({ as = 'h2', size = '4xl', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);

export const DisplayText = ({ as = 'h1', size = '5xl', ...props }: TextProps) => (
  <Text as={as} size={size} {...props} />
);
