import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const boxVariants = tv({
  base: 'rounded-md bg-slate-100 dark:bg-shape-secondary border border-solid border-grey-200 dark:border-grey-600 transition-colors font-sans',
  variants: {
    hover: {
      false: '',
      true: 'hover:bg-slate-200 dark:hover:bg-grey-800'
    },
  },
  defaultVariants: {
    hover: false
  }
})

export interface BoxProps extends ComponentProps<'div'>, VariantProps<typeof boxVariants> {
  children?: ReactNode;
  hover?: boolean;
  className?: string
}

export function Box({ children, hover, className, ...props }: BoxProps) {
  return (
    <div {...props} className={`${boxVariants({ hover })} ${className}`}>
      {children}
    </div>
  );
}

Box.displayName = 'Box';