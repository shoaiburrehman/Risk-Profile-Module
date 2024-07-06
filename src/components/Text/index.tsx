import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { wp } from '../../utils/style.utils';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

const Text = ({ children, style, ...props }: CustomTextProps) => {
  return <RNText style={[styles.text, style]} {...props}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: wp(16),
    color: '#333'
  }
});

export default Text;
