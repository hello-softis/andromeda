import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const textVariants = tv({
  base: 'text-grey-200 font-sans leading-normal m-0',
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

export interface TextProps extends ComponentProps<'p'>, VariantProps<typeof textVariants> {
  children: ReactNode,
  weight?: boolean, 
}

export function Text({ children, sizes, weight, ...props }: TextProps) {
  const weights = weight ? 'bold' : 'normal'; 
  return (
    <p {...props} className={textVariants({ sizes, weights })}>
      {children}
    </p>
  );
}