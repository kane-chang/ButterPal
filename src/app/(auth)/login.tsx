import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { router } from 'expo-router'

const login = () => {
  return (
    <View style={defaultStyles.container}>
      <View>
      <TouchableOpacity onPress={()=>router.back()}><Image source={require('@/../assets/images/backButton.png')}/></TouchableOpacity>
      </View>

      <View>
        <Text style={defaultStyles.subHeader}>Log in</Text>
      </View>
    </View>
  )
}

export default login