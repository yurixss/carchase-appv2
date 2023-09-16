// CustomTextInput.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import TextApp from '../../pattern/TextApp';

export interface TextInputProps {
  placeholder?: string;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  style?: object;
}

const CustomTextInput: React.FC<TextInputProps> = (props) => {
  return (
    <>
      <TextApp style={{ marginBottom: 10 }}>{props.label}</TextApp>
      <TextInput
        style={{ ...styles.input, ...props.style }}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
});

export default CustomTextInput;
