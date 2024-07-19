import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const buttonVariants = tv({
  base: 'text-lime-200 font-mono leading-normal m-0',
  variants: {
    sizes: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
    weights: {
      normal: 'font-normal',
      bold: 'font-bold',
    }
  },
  defaultVariants: {
    sizes: 'md',
    weights: 'normal'
  },
});

export interface TextProps extends ComponentProps<'p'>, VariantProps<typeof buttonVariants> {
  children: ReactNode,
  weight?: boolean, 
}

export function Text({ children, sizes, weight, ...props }: TextProps) {
  const weights = weight ? 'bold' : 'normal'; 
  return (
    <p {...props} className={buttonVariants({ sizes, weights })}>
      {children}
    </p>
  );
}