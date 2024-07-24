import type { ComponentProps } from 'react';
import { Breadcrumb } from "@chakra-ui/breadcrumb"
import { BreadCrumbItem } from './breadCrumbItem'
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
  disabled: boolean
}

export function BreadCrumb({ children, disabled, ...props }: BreadCrumbsProps) {
  return (
    <Breadcrumb {...props} separator={<ArrowRight01Icon className='w-4 h-4 mx-1 text-grey-400' />} className={breadcrumbVariants({ disabled })}>
      <BreadCrumbItem link="/component">Component</BreadCrumbItem>
      <BreadCrumbItem link="/form">Form</BreadCrumbItem>
      <BreadCrumbItem link="/breadcrumb" isCurrentPage={true}>Breadcrumb</BreadCrumbItem>
    </Breadcrumb>
  );
}
