// CustomTextInput.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

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
        <TextInput 
            style={{...styles.input, ...props.style}}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            onBlur={props.onBlur}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
    }
});

export default CustomTextInput;
