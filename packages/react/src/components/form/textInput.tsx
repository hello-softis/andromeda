import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../../index.css';

const textInputVariants = tv({
  base: 'w-full bg-grey-900 py-3 px-4 rounded-sm border-0 box-border flex items-baseline gap-[1px] focus-within:border-2 focus-within:border-softis-mid',
  variants: {
    disabled: {
      true: 'opacity-0 cursor-not-allowed',
      false: 'opacity-1',
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export interface InputTextProps extends ComponentProps<'input'>, VariantProps<typeof textInputVariants> {
  children?: ReactNode,
  prefix?: string
}

export function InputText({ children, prefix, disabled, ...props }: InputTextProps) {
  return (
    <div className={textInputVariants({ disabled })}>
      {!!prefix && (<span className='font-sans text-grey-400'>{prefix}</span>)}
      <input 
        {...props} 
        type="text" 
        className='bg-transparent font-sans text-white border-0 w-full focus:outline-0 placeholder:text-grey-400 disabled:placeholder:text-transparent' 
        disabled={disabled === true}
      />
    </div>
  );
}
