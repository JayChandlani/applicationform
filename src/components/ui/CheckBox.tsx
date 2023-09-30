import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    name: string;
    error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
    ({ className, label, name, error, ...rest }, ref) => {
        return (
            <>
                <div className="flex items-center">
                    <input
                        id={name}
                        name={name}
                        type="checkbox"
                        ref={ref}
                        className="w-4 h-4 text-[#087B2F] bg-gray-100 border-gray-300 rounded focus:ring-0 focus:outline-none"
                        {...rest}
                    />

                    <label htmlFor={name} className="ml-2 text-sm font-normal text-gray-900">
                        {label}
                    </label>
                </div>
                {error && <p className="my-2 text-xs text-end text-red-500">{error}</p>}
            </>
        );
    }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
