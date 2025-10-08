import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Input, type InputProps } from './input';
import { Label } from './label';

const errorVariants = cva('mt-0 text-xs', {
  variants: {
    severity: {
      error: 'text-validation-error',
      warning: 'text-validation-warning',
      info: 'text-validation-info',
    },
  },
  defaultVariants: {
    severity: 'error',
  },
});

export interface FormFieldProps extends InputProps {
  label?: string;
  showLabel?: boolean;
  leftIcon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  rightIcon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  errorIcon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  isInvalid?: boolean;
  error?: string;
  errorSeverity?: 'error' | 'warning' | 'info';
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      showLabel = true,
      leftIcon: LeftIconComponent,
      rightIcon: RightIconComponent,
      errorIcon: ErrorIconComponent,
      isInvalid,
      error,
      errorSeverity = 'error',
      className,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const hasLeftIcon = LeftIconComponent || (isInvalid && ErrorIconComponent);
    const errorColor = {
      error: 'text-validation-error',
      warning: 'text-validation-warning',
      info: 'text-validation-info',
    }[errorSeverity];

    const iconColor = {
      error: '#f22000',
      warning: '#d08700',
      info: '#00A8B5',
    }[errorSeverity];

    return (
      <div className="w-full">
        {showLabel && label && (
          <Label htmlFor={id} className="mb-0">
            {label}
          </Label>
        )}

        <div className="relative">
          {hasLeftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {isInvalid && ErrorIconComponent ? (
                <ErrorIconComponent
                  className={cn('h-4 w-4', errorColor)}
                  style={{ color: iconColor }}
                />
              ) : (
                LeftIconComponent && (
                  <LeftIconComponent className="h-4 w-4 text-[#999]" />
                )
              )}
            </div>
          )}

          <Input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={isInvalid}
            className={cn(
              hasLeftIcon && 'pl-10',
              RightIconComponent && 'pr-10',
              className
            )}
            {...props}
          />

          {RightIconComponent && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <RightIconComponent className="h-4 w-4 text-[#999]" />
            </div>
          )}
        </div>

        {error && (
          <p className={cn(errorVariants({ severity: errorSeverity }))}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormField.displayName = 'FormField';

export { FormField };
