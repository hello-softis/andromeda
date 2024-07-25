import type { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import '../../index.css';

const textInputVariants = tv({
  base: 'w-auto bg-grey-900 py-3 px-4 rounded-md border-2 border-transparent box-border transition-colors duration-300 flex items-center gap-[1px] focus-within:border-[3px] focus-within:border-softis-mid',
  variants: {
    disabled: {
      false: 'opacity-100',
      true: 'opacity-50 cursor-not-allowed',
    },
    invalid: {
      true: 'border-danger-light'
    }
  },
  defaultVariants: {
    disabled: false,
    invalid: false,
  },
});

export interface InputTextProps extends ComponentProps<'input'>, VariantProps<typeof textInputVariants> {
  children?: ReactNode,
  prefix?: string
  leadingIcon: ReactNode
  trailingIcon: ReactNode
  invalid?: boolean
}

export function InputText({ children, prefix, disabled, trailingIcon, invalid, leadingIcon, ...props }: InputTextProps) {
  const iconColor = invalid ? 'text-danger-light' : 'text-grey-300';

  return (
    <div className={`${textInputVariants({ disabled, invalid })} group`}>
      {!!prefix && (<span className='font-sans text-grey-400'>{prefix}</span>)}
      {leadingIcon ? <div className={`mx-2 ${iconColor} group-focus-within:text-softis-mid`}>{leadingIcon}</div> : null}
      <input 
        {...props} 
        type="text" 
        className='peer bg-transparent font-sans text-white border-0 w-full focus:outline-0 placeholder:font-sans placeholder:text-grey-300 disabled:cursor-not-allowed' 
        disabled={disabled === true}
      />
      {trailingIcon ? <div className={`mx-2 ${iconColor} group-focus-within:text-softis-mid`}>{trailingIcon}</div> : null}
    </div>
  ); 
}
