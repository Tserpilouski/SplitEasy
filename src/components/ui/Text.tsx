import { clsx } from 'clsx';
import type React from 'react';

interface TextProps {
    size: 'sm' | 'base';
    variant: 'blue' | 'red';
    as?: 'p' | 'span' | 'h1';
    className?: string;
    children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ size = 'base', variant = 'blue', as = 'p', className, children }) => {
    const Tag = as;

    const sizes = {
        sm: 'text-sm leading-normal',
        base: ' text-base leading-normal',
    };

    const variants = {
        blue: 'text-blue-600',
        red: 'text-red-900',
    };

    return <Tag className={clsx(sizes[size], variants[variant], className)}>{children}</Tag>;
};

export default Text;
