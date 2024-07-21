import type { ComponentProps, ReactNode } from 'react';
import '../../index.css';

export interface InputTextProps extends ComponentProps<'input'> {
  children?: ReactNode,
  prefix?: string
}

export function InputText({ children, prefix, ...props }: InputTextProps) {
  return (
    <div className={`w-full bg-grey-900 py-3 px-4 rounded-sm border-2 border-solid border-grey-900 box-border flex items-baseline focus-within:border-softis-mid disabled:opacity-0 disabled:cursor-not-allowed gap-[1px]`}>
      {!!prefix && (<span className='font-sans font-sm text-grey-400 font-normal'>{prefix}</span>)}
      <input {...props} type="text" className='bg-transparent font-sans font-sm text-white font-normal border-0 w-full focus:outline-0 disabled:cursor-not-allowed placeholder:text-grey-400 disabled:placeholder:text-transparent' />
    </div>
  );
}