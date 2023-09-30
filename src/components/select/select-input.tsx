import React from 'react';
import ReactSelect from 'react-select';
import { Controller } from 'react-hook-form';
import { selectStyles } from './select.styles';

const questionTypes = [
  { label: 'Paragraph', value: 'Paragraph' },
  { label: 'Short answer', value: 'Short answer' },
  { label: 'Yes/No', value: 'Yes/No' },
  { label: 'Dropdown', value: 'Dropdown' },
  { label: 'Multiple choice', value: 'Multiple choice' },
  { label: 'Date', value: 'Date' },
  { label: 'Number', value: 'Number' },
  { label: 'File upload', value: 'File upload' },
  { label: 'Video question', value: 'Video question' },
];

const SelectInput = ({ control, name, setValue, ...rest }: any) => {
  const handleSelectOption = (val: any) => {
    setValue(name, val)
  }
  return (
    <Controller
      name={name}
      control={control}
      {...rest}
      render={({ field }) => (
        <ReactSelect
          onChange={(val: any) => handleSelectOption(val.value)}
          name={name}
          options={questionTypes}
          {...control}
          styles={selectStyles}
        />
      )}
    />

  );
};

export default SelectInput;
