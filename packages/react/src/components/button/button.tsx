import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { Spinner } from '../spinner'
import '../../index.css';

const buttonVariants = tv({
  base: 'flex items-center justify-center rounded-md transition-all focus:outline-0',
  variants: {
    colors: {
      primary: 'bg-softis-mid hover:bg-softis-light',
      secondary: 'border-[3px] border-solid border-softis-mid hover:border-softis-light',
      tertiary: 'hover:bg-shape-tertiary',
      danger: 'bg-shape-secondary hover:bg-shape-tertiary text-danger-light'
    },
    sizes: {
      xs: 'h-6 px-4',
      sm: 'h-7 px-4',
      md: 'h-8 px-4',
      lg: 'h-10 px-6',
      xlg: 'h-12 px-8'
    },
    full: {
      false: 'w-auto',
      true: 'w-full'
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

const textVariants = tv({
  base: 'font-sans font-bold',
  variants: {
    colors: {
      primary: 'text-white',
      secondary: 'text-white',
      tertiary: 'text-white',
      danger: 'text-danger-light'
    },
    sizes: {
      xs: 'text-xs',
      sm: 'text-xs',
      md: 'text-xs',
      lg: 'text-sm',
      xlg: 'text-sm'
    },
  },
  defaultVariants: {
    colors: 'primary',
    sizes: 'md',
  }
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  loading: boolean
}

export function Button({ children, colors, sizes, disable, full, loading, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ colors, sizes, disable, full })}>
      {loading === false 
          ? <span className={textVariants({ colors, sizes })}>{children}</span> 
            : <Spinner />}
    </button>
  );
}
