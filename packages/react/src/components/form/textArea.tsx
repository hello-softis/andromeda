import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../../index.css';

const textAreaVariants = tv({
  base: 'bg-grey-900 py-3 px-4 rounded-sm box-border border-2 border-solid border-grey-900 font-sans font-sm font-medium text-white flex items-baseline focus-within:border-softis-mid min-h-20 resize-y',
  variants: {
    disabled: {
      true: 'opacity-0 cursor-not-allowed',
      false: 'opacity-100'
    }
  },
  defaultVariants: {
    disabled: false
  },
});

export interface TextAreaProps extends ComponentProps<'input'>, VariantProps<typeof textAreaVariants> {
  children?: ReactNode,
}

export function TextArea({ children, disabled }: TextAreaProps) {
  return (
    <textarea className={textAreaVariants({ disabled })}>
      {children}
    </textarea>
  );
}