import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Request from '@/components/Request'

const homepage = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Request Board</Text>
      <View>
        <Request/>
      </View>
    </View>
  )
}

export default homepage