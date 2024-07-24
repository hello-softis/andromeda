import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const boxVariants = tv({
  base: 'rounded-md bg-grey-600 border border-solid border-shape-tertiary',
  variants: {
    hover: {
      false: 'hover:bg-grey-600',
      true: 'hover:bg-shape-secondary'
    },
    hasChildren: {
      false: 'w-80 h-80',
      true: 'w-auto h-auto'
    },
    full: {
      false: 'w-80 h-80',
      true: 'w-full h-full flex items-center justify-center'
    }
  }
})

export interface BoxProps extends ComponentProps<'div'>, VariantProps<typeof boxVariants> {
  children?: ReactNode;
  hover?: boolean;
  full?: boolean
}

export function Box({ children, hover, full }: BoxProps) {
  const hasChildren = !!children;

  return (
    <div className={boxVariants({ hover, hasChildren, full })}>
      {children}
    </div>
  );
}
