import { Control, Controller, FieldErrors } from 'react-hook-form';
import { Switch } from '@headlessui/react';

interface Props {
  control: Control<any>;
  errors?: FieldErrors;
  label?: string;
  name: string;
  disabled?: boolean;
  [key: string]: unknown;
}

const Slider = ({
  control,
  label,
  name,
  errors,
  disabled,
  ...rest
}: Props) => {
  return (
    <div>
      {label && <div>{label}</div>}
      <Controller
        name={name}
        control={control}
        {...rest}
        render={({ field: { onChange, value } }) => (
          <Switch
            checked={value}
            onChange={onChange}
            disabled={disabled}
            className={`${value ? 'bg-[#087B2F]' : 'bg-gray-300'
              } relative inline-flex w-[32px] h-[18px] items-center rounded-full focus:outline-none ${disabled ? 'cursor-not-allowed bg-[#EEF1F4]' : ''
              }`}
            dir="ltr"
          >
            <span className="sr-only">Enable {label}</span>
            <span
              className={`${value ? 'translate-x-[16px]' : 'translate-x-[2px]'
                } inline-block h-[14px] w-[14px]  transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        )}
      />
    </div>
  );
};

export default Slider;
