import type { ComponentProps, ReactNode } from 'react';
import '../../index.css';

export interface ButtonEmptyProps extends ComponentProps<'button'> {
  children: ReactNode
  leadingIcon: ReactNode
}

export function ButtonEmptyState({ children, leadingIcon, ...props }: ButtonEmptyProps) {
  return (
    <button {...props} className='bg-transparent max-w-80 w-full h-12 px-3 border border-solid border-grey-600 hover:border-[3px] hover:border-grey-500 flex items-center justify-center rounded-md transition-all focus:shadow-md'>
      <span className='text-white hover:text-grey-100 font-sans font-normal text-lg flex items-center justify-center gap-2'>
        {leadingIcon}
        {children}
      </span> 
      </button>
  );
}
