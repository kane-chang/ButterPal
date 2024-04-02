import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'

const homepage = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Request Board</Text>
    </View>
  )
}

export default homepage