import type { ReactNode } from 'react';
import cn from 'classnames';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className }: PageContainerProps) => (
  <div className={cn(styles.container, className)}>{children}</div>
);
