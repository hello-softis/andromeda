import type { ComponentProps } from 'react';
import '../index.css';

export interface SpinnerProps extends ComponentProps<'div'> {}

export function Spinner() {
  return (
    <div className="w-30 h-30 border-4 border-solid border-gray-200 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
  )
}
