import { Heading } from '../heading'
import type { ComponentProps, ReactNode } from "react";

export interface CardHeaderProps extends ComponentProps<'div'> {
  children: ReactNode
  rightContent?: ReactNode
}

export function CardHeader({ children, rightContent, ...props }: CardHeaderProps) {
  return (
    <div {...props} className='flex items-center justify-between h-[4.5rem] py-4 px-8 bg-gradient-to-r from-grey-700 to-transparent bg-grey-800 rounded-t-md box-border'>
      <Heading sizes='md' weight={true} className='leading-normal'>{children}</Heading>
      {rightContent && (
        <div className='block ml-auto'>
          <button className='w-10 h-10 flex items-center justify-center relative p-0 bg-transparent text-text-base hover:bg-shape-secondary border border-solid border-transparent rounded-md font-sans font-sm font-bold transition-all'>
            {rightContent}
          </button>
        </div>
        )}
    </div>
  )
}