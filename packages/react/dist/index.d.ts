import * as react_jsx_runtime from 'react/jsx-runtime';
import * as tailwind_variants from 'tailwind-variants';
import { VariantProps } from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import * as react from 'react';
import react__default, { ComponentProps, ReactNode } from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Switch from '@radix-ui/react-switch';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Slider from '@radix-ui/react-slider';
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

declare const boxVariants: tailwind_variants.TVReturnType<{
    hover: {
        false: string;
        true: string;
    };
}, undefined, "rounded-md bg-slate-100 dark:bg-shape-secondary border border-solid border-grey-200 dark:border-grey-600 transition-colors font-sans", tailwind_variants_dist_config.TVConfig<{
    hover: {
        false: string;
        true: string;
    };
}, {
    hover: {
        false: string;
        true: string;
    };
}>, {
    hover: {
        false: string;
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    hover: {
        false: string;
        true: string;
    };
}, undefined, "rounded-md bg-slate-100 dark:bg-shape-secondary border border-solid border-grey-200 dark:border-grey-600 transition-colors font-sans", tailwind_variants_dist_config.TVConfig<{
    hover: {
        false: string;
        true: string;
    };
}, {
    hover: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>;
interface BoxProps extends ComponentProps<'div'>, VariantProps<typeof boxVariants> {
    children?: ReactNode;
    hover?: boolean;
    className?: string;
}
declare function Box({ children, hover, className, ...props }: BoxProps): react_jsx_runtime.JSX.Element;
declare namespace Box {
    var displayName: string;
}

declare const textVariants: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, undefined, "text-grey-800 dark:text-grey-200 font-sans", tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, undefined, "text-grey-800 dark:text-grey-200 font-sans", tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}>, unknown, unknown, undefined>>;
interface TextProps extends ComponentProps<'p'>, VariantProps<typeof textVariants> {
    children: ReactNode;
    size?: keyof typeof textVariants.variants.size;
    weight?: keyof typeof textVariants.variants.weight;
    className?: string;
}
declare const Text: react.ForwardRefExoticComponent<Omit<TextProps, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

declare const titleVariants: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, undefined, "text-grey-900 dark:text-grey-100 font-sans", tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, undefined, "text-grey-900 dark:text-grey-100 font-sans", tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
    };
}>, unknown, unknown, undefined>>;
interface TitleProps extends ComponentProps<'h1'>, VariantProps<typeof titleVariants> {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: keyof typeof titleVariants.variants.size;
    weight?: keyof typeof titleVariants.variants.weight;
    className?: string;
}
declare const Title: react__default.ForwardRefExoticComponent<Omit<TitleProps, "ref"> & react__default.RefAttributes<HTMLElement>>;

declare const avatarRootVariants: tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}, undefined, "rounded-full inline-block overflow-hidden outline text-slate-100 font-bold leading-none", tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}>, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}, undefined, "rounded-full inline-block overflow-hidden outline text-slate-100 font-bold leading-none", tailwind_variants_dist_config.TVConfig<{
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}, {
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    theme: {
        default: string;
        creator: string;
        educator: string;
        moderator: string;
        company: string;
    };
}>, unknown, unknown, undefined>>;
interface AvatarProps extends ComponentProps<typeof Avatar.Root>, VariantProps<typeof avatarRootVariants> {
    children?: ReactNode;
    src?: string;
    fallback?: string;
    alt?: string;
    className?: string;
    name?: string;
}
declare function AvatarRoot({ children, className, size, theme, }: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace AvatarRoot {
    var displayName: string;
}
declare function AvatarImage({ className, src, alt }: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace AvatarImage {
    var displayName: string;
}
declare function AvatarFallback({ children, className }: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace AvatarFallback {
    var displayName: string;
}
declare function Label({ children, className }: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace Label {
    var displayName: string;
}

declare const textAreaVariants: tailwind_variants.TVReturnType<{
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "bg-slate-100 dark:bg-grey-800 py-3 px-4 w-full rounded-sm box-border border-2 border-solid border-slate-200 dark:border-grey-700 font-sans font-sm font-medium text-grey-800 dark:text-slate-50 flex items-baseline focus-within:border-softis-mid min-h-20 resize-y antialiased", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        true: string;
        false: string;
    };
}, {
    disabled: {
        true: string;
        false: string;
    };
}>, {
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "bg-slate-100 dark:bg-grey-800 py-3 px-4 w-full rounded-sm box-border border-2 border-solid border-slate-200 dark:border-grey-700 font-sans font-sm font-medium text-grey-800 dark:text-slate-50 flex items-baseline focus-within:border-softis-mid min-h-20 resize-y antialiased", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        true: string;
        false: string;
    };
}, {
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
declare const inputVariants: tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, undefined, "group bg-slate-100 dark:bg-grey-800 py-3 px-4 rounded-md box-border border-2 border-solid border-slate-200 dark:border-grey-700 transition-colors duration-300 flex items-center focus-within:border-2 focus-within:border-softis-mid antialiased gap-1", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}>, {
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, undefined, "group bg-slate-100 dark:bg-grey-800 py-3 px-4 rounded-md box-border border-2 border-solid border-slate-200 dark:border-grey-700 transition-colors duration-300 flex items-center focus-within:border-2 focus-within:border-softis-mid antialiased gap-1", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
    invalid: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
interface TextAreaProps extends ComponentProps<'textarea'>, VariantProps<typeof textAreaVariants> {
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
}
interface InputProps extends ComponentProps<'input'>, VariantProps<typeof inputVariants> {
    disabled?: boolean;
    invalid?: boolean;
    className?: string;
}
declare function TextArea({ disabled, className, ...props }: TextAreaProps): react_jsx_runtime.JSX.Element;
declare namespace TextArea {
    var displayName: string;
}
declare function TextField({ children, disabled, prefix, invalid, className, ...props }: InputProps): react_jsx_runtime.JSX.Element;
declare namespace TextField {
    var displayName: string;
}
declare function PasswordField({ disabled, prefix, invalid, className, ...props }: InputProps): react_jsx_runtime.JSX.Element;
declare namespace PasswordField {
    var displayName: string;
}

declare const checkboxVariants$1: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "bg-grey-800 rounded-sm leading-[0] cursor-pointer overflow-hidden box-border flex justify-center items-center border-2 border-solid border-grey-300 focus:border-2 focus:border-solid focus:border-softis-mid group aria-checked:bg-softis-light aria-checked:border-softis-light", tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "bg-grey-800 rounded-sm leading-[0] cursor-pointer overflow-hidden box-border flex justify-center items-center border-2 border-solid border-grey-300 focus:border-2 focus:border-solid focus:border-softis-mid group aria-checked:bg-softis-light aria-checked:border-softis-light", tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
interface CheckboxProps extends VariantProps<typeof Checkbox.Root>, VariantProps<typeof checkboxVariants$1> {
    children: ReactNode;
    className?: string;
    size?: keyof typeof checkboxVariants$1.variants.size;
}
declare function CheckboxRoot({ children, className, disabled, size, ...props }: ComponentProps<typeof Checkbox.Root> & CheckboxProps): react_jsx_runtime.JSX.Element;
declare namespace CheckboxRoot {
    var displayName: string;
}
declare function CheckboxIndicator({ className, size, children, ...props }: ComponentProps<typeof Checkbox.Indicator> & CheckboxProps): react_jsx_runtime.JSX.Element;
declare namespace CheckboxIndicator {
    var displayName: string;
}

interface MultiStepProps extends ComponentProps<'div'> {
    className?: string;
    key?: string | number;
    size?: number;
    step?: number;
    disabled?: boolean;
}
declare function MultiStep({ className, step, size, }: MultiStepProps): react_jsx_runtime.JSX.Element;
declare namespace MultiStep {
    var displayName: string;
}

declare const buttonVariants: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "flex items-center justify-center rounded-md transition-all focus:shadow-md w-auto font-bold gap-3", tailwind_variants_dist_config.TVConfig<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "flex items-center justify-center rounded-md transition-all focus:shadow-md w-auto font-bold gap-3", tailwind_variants_dist_config.TVConfig<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
        danger: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    full: {
        true: string;
        false: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
declare const buttonIconVariants: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "flex items-center justify-center rounded-md transition-all focus:outline-none", tailwind_variants_dist_config.TVConfig<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "flex items-center justify-center rounded-md transition-all focus:outline-none", tailwind_variants_dist_config.TVConfig<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
declare const buttonLinkVariants: tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "font-medium relative transition-all after:content-[\"\"] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out", tailwind_variants_dist_config.TVConfig<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "font-medium relative transition-all after:content-[\"\"] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out", tailwind_variants_dist_config.TVConfig<{
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    color: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
    className?: string;
    color?: keyof typeof buttonVariants.variants.color;
    size?: keyof typeof buttonVariants.variants.size;
    full?: boolean;
    disabled?: boolean;
    loading?: boolean;
}
interface ButtonIconProps extends ComponentProps<'button'>, VariantProps<typeof buttonIconVariants> {
    children: ReactNode;
    className?: string;
    color?: keyof typeof buttonIconVariants.variants.color;
    size?: keyof typeof buttonIconVariants.variants.size;
    disabled?: boolean;
    loading?: boolean;
}
interface ButtonLinkProps extends ComponentProps<'a'>, VariantProps<typeof buttonLinkVariants> {
    children: ReactNode;
    className?: string;
    color?: keyof typeof buttonLinkVariants.variants.color;
    size?: keyof typeof buttonLinkVariants.variants.size;
    disabled?: boolean;
}
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare function ButtonEmptyState({ children, className, disabled, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;
declare namespace ButtonEmptyState {
    var displayName: string;
}
declare function ButtonIcon({ children, className, color, size, disabled, loading, ...props }: ButtonIconProps): react_jsx_runtime.JSX.Element;
declare namespace ButtonIcon {
    var displayName: string;
}
declare function ButtonLink({ children, className, color, size, disabled, ...props }: ButtonLinkProps): react_jsx_runtime.JSX.Element;
declare namespace ButtonLink {
    var displayName: string;
}

declare const checkboxVariants: tailwind_variants.TVReturnType<{
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}, undefined, "border-solid border-white/50 border-t-white rounded-full animate-spin", tailwind_variants_dist_config.TVConfig<{
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}, {
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}>, {
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}, undefined, "border-solid border-white/50 border-t-white rounded-full animate-spin", tailwind_variants_dist_config.TVConfig<{
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}, {
    sizes: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    colors: {
        'softis-light': string;
        'softis-mid': string;
        'softis-dark': string;
        'softis-low': string;
        'comet-50': string;
        'comet-100': string;
        'comet-200': string;
        'comet-300': string;
        'comet-400': string;
        'comet-500': string;
        'comet-600': string;
        'comet-700': string;
        'comet-800': string;
        'comet-900': string;
        'comet-950': string;
        'nebula-50': string;
        'nebula-100': string;
        'nebula-200': string;
        'nebula-300': string;
        'nebula-400': string;
        'nebula-500': string;
        'nebula-600': string;
        'nebula-700': string;
        'nebula-800': string;
        'nebula-900': string;
        'nebula-950': string;
        'success-light': string;
        'success-base': string;
        'success-low': string;
        'danger-light': string;
        'danger-base': string;
        'danger-low': string;
        'warning-light': string;
        'warning-base': string;
        'warning-low': string;
        'new-light': string;
        'new-base': string;
        'new-low': string;
        black: string;
        white: string;
        'grey-50': string;
        'grey-100': string;
        'grey-200': string;
        'grey-300': string;
        'grey-400': string;
        'grey-500': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'grey-950': string;
        'text-title': string;
        'text-base': string;
        'text-support': string;
        placeholder: string;
        'inputs-icons': string;
        'shape-tertiary': string;
        'shape-secondary': string;
        'shape-primary': string;
        'color-background': string;
    };
}>, unknown, unknown, undefined>>;
interface SpinnerProps extends ComponentProps<'div'>, VariantProps<typeof checkboxVariants> {
}
declare function Spinner({ sizes, colors }: SpinnerProps): react_jsx_runtime.JSX.Element;
declare namespace Spinner {
    var displayName: string;
}

declare const tagVariants: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "bg-slate-200 hover:bg-slate-300 dark:bg-grey-600 dark:hover:bg-grey-500 inline-flex items-center rounded-full transition-all gap-1 ml-5 text-grey-800 dark:text-grey-100 font-bold font-sans", tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "bg-slate-200 hover:bg-slate-300 dark:bg-grey-600 dark:hover:bg-grey-500 inline-flex items-center rounded-full transition-all gap-1 ml-5 text-grey-800 dark:text-grey-100 font-bold font-sans", tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
declare const deleteTagVariants: tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "relative bg-slate-400 dark:bg-grey-800 rounded-full flex items-center justify-center font-sans border border-transparent", tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "relative bg-slate-400 dark:bg-grey-800 rounded-full flex items-center justify-center font-sans border border-transparent", tailwind_variants_dist_config.TVConfig<{
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}, {
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
interface TagProps extends ComponentProps<'button'>, VariantProps<typeof tagVariants> {
    children: ReactNode;
    size?: keyof typeof tagVariants.variants.size;
    disabled?: boolean;
    className?: string;
}
interface DeleteIconProps extends VariantProps<typeof deleteTagVariants> {
    children: ReactNode;
    size?: keyof typeof deleteTagVariants.variants.size;
    className?: string;
}
declare function Tag({ children, size, disabled, className, ...props }: TagProps): react_jsx_runtime.JSX.Element;
declare namespace Tag {
    var displayName: string;
}
declare function DeleteIcon({ size, children, className }: DeleteIconProps): react_jsx_runtime.JSX.Element;
declare function TagDelete({ children, size, disabled, className, ...props }: TagProps): react_jsx_runtime.JSX.Element;

declare const switchVariants: tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
}, undefined, "w-[72px] h-6 bg-slate-300 dark:bg-grey-800 rounded-full relative data-[state=checked]:bg-softis-mid outline-0", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
}>, {
    disabled: {
        false: string;
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
}, undefined, "w-[72px] h-6 bg-slate-300 dark:bg-grey-800 rounded-full relative data-[state=checked]:bg-softis-mid outline-0", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>;
interface SwitchProps extends ComponentProps<typeof Switch.Root>, VariantProps<typeof switchVariants> {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}
declare function SwitchRoot({ children, className, disabled, ...props }: SwitchProps): react_jsx_runtime.JSX.Element;
declare namespace SwitchRoot {
    var displayName: string;
}
declare function SwitchThumb({ className, ...props }: ComponentProps<typeof Switch.Thumb>): react_jsx_runtime.JSX.Element;
declare namespace SwitchThumb {
    var displayName: string;
}

declare const radioButtonVariants: tailwind_variants.TVReturnType<{
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "flex flex-col gap-4", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        true: string;
        false: string;
    };
}, {
    disabled: {
        true: string;
        false: string;
    };
}>, {
    disabled: {
        true: string;
        false: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    disabled: {
        true: string;
        false: string;
    };
}, undefined, "flex flex-col gap-4", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        true: string;
        false: string;
    };
}, {
    disabled: {
        true: string;
        false: string;
    };
}>, unknown, unknown, undefined>>;
interface RadioButtonProps extends ComponentProps<typeof RadioGroup.Root>, VariantProps<typeof radioButtonVariants> {
    children?: ReactNode[];
    className?: string;
    label?: string;
    id?: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    defaultValue: string;
}
interface RadioButtonItemProps extends ComponentProps<typeof RadioGroup.Item> {
    value: string;
    id: string;
    label: string;
    className?: string;
}
declare function RadioButtonRoot({ children, disabled, className, defaultValue, ...props }: RadioButtonProps): react_jsx_runtime.JSX.Element;
declare namespace RadioButtonRoot {
    var displayName: string;
}
declare function RadioButtonItem({ value, id, label, className, ...props }: RadioButtonItemProps): react_jsx_runtime.JSX.Element;
declare namespace RadioButtonItem {
    var displayName: string;
}

declare const sliderVariants: tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
}, undefined, "relative flex items-center select-none touch-none w-full cursor-grab", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
}>, {
    disabled: {
        false: string;
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
}, undefined, "relative flex items-center select-none touch-none w-full cursor-grab", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>;
interface SliderProps extends ComponentProps<typeof Slider.Root>, VariantProps<typeof sliderVariants> {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    min?: number;
    max?: number;
}
declare function SliderRoot({ children, min, max, className, disabled, ...props }: SliderProps): react_jsx_runtime.JSX.Element;
declare namespace SliderRoot {
    var displayName: string;
}
declare function SliderTrack({ children, className, ...props }: ComponentProps<typeof Slider.Track>): react_jsx_runtime.JSX.Element;
declare namespace SliderTrack {
    var displayName: string;
}
declare function SliderRange({ className, ...props }: ComponentProps<typeof Slider.Track>): react_jsx_runtime.JSX.Element;
declare namespace SliderRange {
    var displayName: string;
}
declare function SliderThumb({ className, }: ComponentProps<typeof Slider.Thumb>): react_jsx_runtime.JSX.Element;
declare namespace SliderThumb {
    var displayName: string;
}

declare const breadcrumbVariants: tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
}, undefined, "flex items-center gap-1 overflow-hidden text-sm text-grey-500 dark:text-grey-300", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
}>, {
    disabled: {
        false: string;
        true: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    disabled: {
        false: string;
        true: string;
    };
}, undefined, "flex items-center gap-1 overflow-hidden text-sm text-grey-500 dark:text-grey-300", tailwind_variants_dist_config.TVConfig<{
    disabled: {
        false: string;
        true: string;
    };
}, {
    disabled: {
        false: string;
        true: string;
    };
}>, unknown, unknown, undefined>>;
interface BreadcrumbProps extends ComponentProps<'button'>, VariantProps<typeof breadcrumbVariants> {
    children?: ReactNode;
    className?: string;
    crumbs: Array<string>;
    link?: Array<string>;
    disabled?: boolean;
}
declare function Breadcrumb({ crumbs, link, disabled, className, ...props }: BreadcrumbProps): react_jsx_runtime.JSX.Element;
declare namespace Breadcrumb {
    var displayName: string;
}

interface CardProps extends ComponentProps<'div'> {
    children: ReactNode;
    className?: string;
}
declare function CardRoot({ children, className, ...props }: CardProps): react_jsx_runtime.JSX.Element;
declare namespace CardRoot {
    var displayName: string;
}
declare function CardHeader({ children }: CardProps): react_jsx_runtime.JSX.Element;
declare namespace CardHeader {
    var displayName: string;
}
declare function CardContent({ children, className }: CardProps): react_jsx_runtime.JSX.Element;
declare namespace CardContent {
    var displayName: string;
}

interface SkeletonProps {
    className?: string;
}
declare function Skeleton({ className }: SkeletonProps): react_jsx_runtime.JSX.Element;
declare namespace Skeleton {
    var className: string;
}

declare const badgeVariants: tailwind_variants.TVReturnType<{
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "flex items-center text-center justify-center rounded-sm font-bold leading-none uppercase", tailwind_variants_dist_config.TVConfig<{
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}>, {
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, undefined, "flex items-center text-center justify-center rounded-sm font-bold leading-none uppercase", tailwind_variants_dist_config.TVConfig<{
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}, {
    variant: {
        new: string;
        danger: string;
        success: string;
        warning: string;
        info: string;
        custom: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
}>, unknown, unknown, undefined>>;
interface BadgeProps extends ComponentProps<'div'>, VariantProps<typeof badgeVariants> {
    children?: ReactNode;
    className?: string;
}
declare function Badge({ children, variant, size, className, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;
declare namespace Badge {
    var className: string;
}

interface HoverCardProps {
    children?: ReactNode;
}
declare function HoverCardRoot({ children, }: ComponentProps<typeof HoverCard.Root>): react_jsx_runtime.JSX.Element;
declare namespace HoverCardRoot {
    var displayName: string;
}
declare function HoverCardTrigger({ children, }: ComponentProps<typeof HoverCard.Trigger>): react_jsx_runtime.JSX.Element;
declare namespace HoverCardTrigger {
    var displayName: string;
}
declare function HoverCardPortal({ children, }: ComponentProps<typeof HoverCard.Portal>): react_jsx_runtime.JSX.Element;
declare namespace HoverCardPortal {
    var displayName: string;
}
declare function HoverCardContent({ children, className, }: ComponentProps<typeof HoverCard.Content>): react_jsx_runtime.JSX.Element;
declare namespace HoverCardContent {
    var displayName: string;
}
declare function HoverCardArrow(): react_jsx_runtime.JSX.Element;
declare namespace HoverCardArrow {
    var displayName: string;
}

interface TooltipRootProps extends ComponentProps<typeof Tooltip.Root> {
    children?: ReactNode;
    className?: string;
}
declare function TooltipProvider({ children, }: ComponentProps<typeof Tooltip.Provider>): react_jsx_runtime.JSX.Element;
declare function TooltipRoot({ children }: TooltipRootProps): react_jsx_runtime.JSX.Element;
declare namespace TooltipRoot {
    var displayName: string;
}
declare function TooltipTrigger({ children, className, }: ComponentProps<typeof Tooltip.Trigger>): react_jsx_runtime.JSX.Element;
declare namespace TooltipTrigger {
    var displayName: string;
}
declare function TooltipPortal({ children, }: ComponentProps<typeof Tooltip.Portal>): react_jsx_runtime.JSX.Element;
declare namespace TooltipPortal {
    var displayName: string;
}
declare function TooltipContent({ children, className, }: ComponentProps<typeof Tooltip.Content>): react_jsx_runtime.JSX.Element;
declare namespace TooltipContent {
    var displayName: string;
}
declare function TooltipArrow(): react_jsx_runtime.JSX.Element;
declare namespace TooltipArrow {
    var displayName: string;
}

interface ModalProps {
    children?: ReactNode;
    className?: string;
}
declare function ModalRoot({ children, }: ComponentProps<typeof Dialog.Root> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalRoot {
    var displayName: string;
}
declare function ModalTrigger({ children, }: ComponentProps<typeof Dialog.Trigger> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalTrigger {
    var displayName: string;
}
declare function ModalPortal({ children, }: ComponentProps<typeof Dialog.Portal> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalPortal {
    var displayName: string;
}
declare function ModalOverlay(): react_jsx_runtime.JSX.Element;
declare namespace ModalOverlay {
    var displayName: string;
}
declare function ModalContent({ children, className, }: ComponentProps<typeof Dialog.Content> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalContent {
    var displayName: string;
}
declare function ModalTitle({ children, className, }: ComponentProps<typeof Dialog.Title> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalTitle {
    var displayName: string;
}
declare function ModalDescription({ children, className, }: ComponentProps<typeof Dialog.Description> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalDescription {
    var displayName: string;
}
declare function ModalActions({ children, className, }: ComponentProps<'div'> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalActions {
    var displayName: string;
}
declare function ModalClose({ children, className, }: ComponentProps<typeof Dialog.Close> & ModalProps): react_jsx_runtime.JSX.Element;
declare namespace ModalClose {
    var displayName: string;
}

interface SelectFieldProps {
    children?: ReactNode;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    className?: string;
    ariaLabel?: string;
}
declare function SelectFieldRoot({ children, ...props }: ComponentProps<typeof Select.Root> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldRoot {
    var displayName: string;
}
declare function SelectFieldTrigger({ children, className, ariaLabel, ...props }: ComponentProps<typeof Select.Trigger> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldTrigger {
    var displayName: string;
}
declare function SelectFieldValue({ placeholder, className, ...props }: ComponentProps<typeof Select.Value> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldValue {
    var displayName: string;
}
declare function SelectFieldIcon({ className, ...props }: ComponentProps<typeof Select.Icon> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldIcon {
    var displayName: string;
}
declare function SelectFieldPortal({ children, ...props }: ComponentProps<typeof Select.Portal> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldPortal {
    var displayName: string;
}
declare function SelectFieldContent({ children, className, ...props }: ComponentProps<typeof Select.Content> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldContent {
    var displayName: string;
}
declare function SelectFieldViewPort({ children, className, ...props }: ComponentProps<typeof Select.Viewport> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldViewPort {
    var displayName: string;
}
declare function SelectedFieldGroup({ children, className, ...props }: ComponentProps<typeof Select.Group> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectedFieldGroup {
    var displayName: string;
}
declare function SelectedFieldLabel({ children, className, ...props }: ComponentProps<typeof Select.Label> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectedFieldLabel {
    var displayName: string;
}
declare const SelectedFieldItem: react.ForwardRefExoticComponent<{
    children: ReactNode;
    value: string;
    className?: string;
} & react.RefAttributes<HTMLDivElement>>;
declare function SelectedFieldIndicator({ className, ...props }: ComponentProps<typeof Select.ItemIndicator> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectedFieldIndicator {
    var displayName: string;
}
declare function SelectFieldSeparator({ children, className, ...props }: ComponentProps<typeof Select.Separator> & SelectFieldProps): react_jsx_runtime.JSX.Element;
declare namespace SelectFieldSeparator {
    var displayName: string;
}

interface DropdownProps {
    children?: ReactNode;
    className?: string;
    value?: string;
}
declare function DropdownRoot({ children, ...props }: ComponentProps<typeof DropdownMenu.Root> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownRoot {
    var displayName: string;
}
declare function DropdownTrigger({ children, className, ...props }: ComponentProps<typeof DropdownMenu.Trigger> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownTrigger {
    var displayName: string;
}
declare function DropdownPortal({ children, ...props }: ComponentProps<typeof DropdownMenu.Portal> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownPortal {
    var displayName: string;
}
declare function DropdownContent({ children, className, ...props }: ComponentProps<typeof DropdownMenu.Content> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownContent {
    var displayName: string;
}
declare function DropdownLabel({ children, className, ...props }: ComponentProps<typeof DropdownMenu.Label> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownLabel {
    var displayName: string;
}
declare function DropdownItem({ children, className, ...props }: ComponentProps<typeof DropdownMenu.Item> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownItem {
    var displayName: string;
}
declare function DropdownGroup({ children, className, ...props }: ComponentProps<typeof DropdownMenu.Group> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownGroup {
    var displayName: string;
}
declare function DropdownCheckboxItem({ children, className, ...props }: ComponentProps<typeof DropdownMenu.CheckboxItem> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownCheckboxItem {
    var displayName: string;
}
declare function DropdownRadioGroup({ children, className, ...props }: ComponentProps<typeof DropdownMenu.RadioGroup> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownRadioGroup {
    var displayName: string;
}
declare function DropdownRadioItem({ children, className, value, ...props }: ComponentProps<typeof DropdownMenu.RadioItem> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownRadioItem {
    var displayName: string;
}
declare function DropdownItemIndicator({ children, className, ...props }: ComponentProps<typeof DropdownMenu.ItemIndicator> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownItemIndicator {
    var displayName: string;
}
declare function DropdownSeparator({ className, ...props }: ComponentProps<typeof DropdownMenu.Separator> & DropdownProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownSeparator {
    var displayName: string;
}

export { AvatarFallback, AvatarImage, type AvatarProps, AvatarRoot, Badge, type BadgeProps, Box, type BoxProps, Breadcrumb, type BreadcrumbProps, Button, ButtonEmptyState, ButtonIcon, type ButtonIconProps, ButtonLink, type ButtonLinkProps, type ButtonProps, CardContent, CardHeader, type CardProps, CardRoot, CheckboxIndicator, type CheckboxProps, CheckboxRoot, DeleteIcon, type DeleteIconProps, DropdownCheckboxItem, DropdownContent, DropdownGroup, DropdownItem, DropdownItemIndicator, DropdownLabel, DropdownPortal, type DropdownProps, DropdownRadioGroup, DropdownRadioItem, DropdownRoot, DropdownSeparator, DropdownTrigger, HoverCardArrow, HoverCardContent, HoverCardPortal, type HoverCardProps, HoverCardRoot, HoverCardTrigger, type InputProps, Label, ModalActions, ModalClose, ModalContent, ModalDescription, ModalOverlay, ModalPortal, type ModalProps, ModalRoot, ModalTitle, ModalTrigger, MultiStep, type MultiStepProps, PasswordField, RadioButtonItem, type RadioButtonItemProps, type RadioButtonProps, RadioButtonRoot, SelectFieldContent, SelectFieldIcon, SelectFieldPortal, type SelectFieldProps, SelectFieldRoot, SelectFieldSeparator, SelectFieldTrigger, SelectFieldValue, SelectFieldViewPort, SelectedFieldGroup, SelectedFieldIndicator, SelectedFieldItem, SelectedFieldLabel, Skeleton, type SkeletonProps, type SliderProps, SliderRange, SliderRoot, SliderThumb, SliderTrack, Spinner, type SpinnerProps, type SwitchProps, SwitchRoot, SwitchThumb, Tag, TagDelete, type TagProps, Text, TextArea, type TextAreaProps, TextField, type TextProps, Title, type TitleProps, TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, type TooltipRootProps, TooltipTrigger };
