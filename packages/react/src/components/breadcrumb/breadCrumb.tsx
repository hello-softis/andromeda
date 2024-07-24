import type { ComponentProps, ReactNode } from 'react';
import { Breadcrumb } from "@chakra-ui/breadcrumb"
import { tv, VariantProps } from 'tailwind-variants';
import { ArrowRight01Icon } from 'hugeicons-react'
import '../../index.css';

const breadcrumbVariants = tv({
  base: 'flex items-center',
  variants: {
    disabled: {
      false: 'opacity-100 cursor-default',
      true: 'opacity-50 cursor-not-allowed'
    }
  }
})

export interface BreadCrumbsProps extends ComponentProps<'nav'>, VariantProps<typeof breadcrumbVariants> {
  children: ReactNode
  disabled: boolean
}

export function BreadCrumb({ children, disabled, ...props }: BreadCrumbsProps) {
  return (
    <Breadcrumb {...props} separator={<ArrowRight01Icon className='w-4 h-4 mx-1 text-grey-400' />} className={breadcrumbVariants({ disabled })}>
      {children}
    </Breadcrumb>
  );
}
