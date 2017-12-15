import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'
import globalStyles from '../ui/styles';

export default function TextButton ({ children, onPress, style = {}, txtStyle = {} }) {
  return (
    <TouchableOpacity style={[globalStyles.button, style]} onPress={onPress}>
      <Text style={[styles.reset, globalStyles.buttonText, txtStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  }
});