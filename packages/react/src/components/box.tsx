import type { ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const boxVariants = tv({
  base: 'rounded-md bg-shape-secondary border border-solid border-grey-600',
  variants: {
    hover: {
      false: 'hover:bg-shape-secondary',
      true: 'hover:bg-shape-tertiary'
    },
    hasChildren: {
      false: 'w-80 h-80',
      true: 'w-auto h-auto'
    },
    full: {
      false: 'w-80 h-80',
      true: 'w-full h-full'
    }
  }
})

export interface BoxProps extends VariantProps<typeof boxVariants> {
  children?: ReactNode;
  hover?: boolean;
  hasChildren?: boolean
  full?: boolean
}

export function Box({ children, hover, hasChildren, full }: BoxProps) {
  return (
    <div className={boxVariants({ hover, hasChildren, full })}>
      {children}
    </div>
  );
}
