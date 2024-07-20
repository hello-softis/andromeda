import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex items-center gap-2 justify-center text-white',
  variants: {
    colors: {
      primary: 'bg-softis-light',
      secondary: 'bg-comet-900',
    },
    sizes: {
      default: 'py-2 font-default',
      full: 'w-full h-11',
    },
  },
  defaultVariants: {
    colors: 'primary',
    sizes: 'default',
  },
});

interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ children, colors, sizes, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ colors, sizes })}>
      {children}
    </button>
  );
}
