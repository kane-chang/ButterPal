import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'

const profile = () => {
  return (
    <View style={defaultStyles.container}>
      <Text>profile</Text>
      <TouchableOpacity style={defaultStyles.btnPrimary} onPress={() => router.replace('/')}><Text>Log Out</Text></TouchableOpacity>
    </View>
  )
}

export default profile