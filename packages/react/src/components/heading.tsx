import type { ComponentProps, ElementType, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../index.css';

const headingVariants = tv({
  base: 'text-grey-100 font-sans leading-shorter m-0',
  variants: {
    sizes: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      xl: 'text-6xl',
      '2xl': 'text-7xl'
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

export interface HeadingProps extends ComponentProps<'h2'>, VariantProps<typeof headingVariants> {
  children: ReactNode,
  weight?: boolean, 
  as?: ElementType
}

export function Heading({ children, sizes, weight, ...props }: HeadingProps) {
  const weights = weight ? 'bold' : 'normal'; 
  return (
    <h2 {...props} className={headingVariants({ sizes, weights })}>
      {children}
    </h2>
  );
}