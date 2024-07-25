import type { ComponentProps, ReactNode } from 'react';
import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb"
import '../../index.css'

export interface BreadCrumbsItemProps extends ComponentProps<'li'> {
  children: ReactNode
  link?: string
  isCurrentPage?: boolean
}

export function BreadCrumbItem({ children, link, isCurrentPage, ...props }: BreadCrumbsItemProps) {
  return (
    <BreadcrumbItem {...props} className='flex items-center'>
      <BreadcrumbLink href={link} className={`text-sans font-medium text-md leading-6 ${isCurrentPage ? 'text-white' : 'text-text-base hover:text-grey-100'}`}>{children}</BreadcrumbLink>
    </BreadcrumbItem>
  );
}
