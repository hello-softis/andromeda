import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { Spinner } from '../spinner'
import '../../index.css';

const buttonIconVariants = tv({
  base: 'flex items-center justify-center rounded-md transition-all focus:outline-0',
  variants: {
    colors: {
      primary: 'bg-softis-mid hover:bg-softis-light',
      secondary: 'bg-shape-secondary hover:bg-shape-tertiary',
      tertiary: 'hover:bg-shape-tertiary',
    },
    sizes: {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    },
    disable: {
      false: 'opacity-1 cursor-pointer',
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    colors: 'primary',
    sizes: 'lg',
    width: false,
    disable: false
  },
});

export interface ButtonIconProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonIconVariants> {
  children: ReactNode;
  loading: boolean
  disable: boolean
}

export function ButtonIcon({ children, colors, sizes, disable, loading, ...props }: ButtonIconProps) {
  return (
    <button {...props} className={buttonIconVariants({ colors, sizes, disable })}>
      {loading === false 
          ? <span className='text-white'>{children}</span> 
            : <Spinner />}
    </button>
  );
}
