import React from 'react';
import { Controller } from 'react-hook-form';
import CustomTextInput from '../TextInput';

export function ControlledTextInput({ control, name, rules, ...rest }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <CustomTextInput
          {...rest}
          value={value}
          onChangeText={(value) => onChange(value)}
          onBlur={onBlur}
        />
      )}
    />
  );
}
