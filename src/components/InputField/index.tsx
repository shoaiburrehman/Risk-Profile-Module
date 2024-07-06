import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { hp, wp } from '../../utils/style.utils';

interface InputFieldProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const InputField = ({ value, onChangeText, placeholder, ...props }: InputFieldProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={'#ccc'}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: wp(8),
    padding: wp(8),
    marginBottom: hp(10),
    backgroundColor: '#fff'
  }
});

export default InputField;
