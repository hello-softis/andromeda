import type { ComponentProps, ReactNode } from 'react';
import '../index.css';

export interface BoxProps extends ComponentProps<'div'> {
  children?: ReactNode;
}

export function Box({ children }: BoxProps) {
  const hasChildren = !!children;
  const widthClass = hasChildren ? 'w-full' : 'w-80';
  const heightClass = hasChildren ? 'h-auto' : 'h-80';

  return (
    <div className={`${widthClass} ${heightClass} rounded-md bg-shape-secondary border border-solid border-grey-600 hover:bg-shape-tertiary`}>
      {children}
    </div>
  );
}
