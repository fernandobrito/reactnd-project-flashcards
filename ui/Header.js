import React from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

export default function Header ({ children }) {
  return (
    <Text style={{ color: purple, fontSize: 35 }}>
      {children}
    </Text>
  )
}