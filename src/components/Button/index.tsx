import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { wp } from '../../utils/style.utils';
import { ThemeColors } from '../../utils/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, onPress, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: ThemeColors.primary,
    padding: wp(10),
    borderRadius: wp(8),
    alignItems: 'center'
  },
  buttonText: {
    color: ThemeColors.White,
    fontSize: wp(16),
    fontWeight: 'bold'
  }
});

export default Button;
