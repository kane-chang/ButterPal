import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { router, useNavigation } from 'expo-router'

const Welcome = () => {
  
  return (
    <View style={defaultStyles.container}>
      {/* Welcome Text */}
      <View style={{height: '10%', display: 'flex', justifyContent: 'flex-end', marginBottom: 6}}>
        <Text style={defaultStyles.header}>Hello,</Text>
      </View>
      <View style={{height: '60%'}}>
        <Text style={defaultStyles.subHeader}>Welcome to ButterPal, a place where you can help a pal, or ask a pal for help</Text>
      </View>

      {/* Login/Signup Buttons  */}
      <View style={{gap: 8}}>
        <TouchableOpacity style={defaultStyles.btnPrimary} onPress={()=>router.push('/(auth)/login')}><Text style={defaultStyles.btnTextPrimary}>Log In</Text></TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnSecondary} onPress={()=>router.push('/(auth)/(signup)/signup')}><Text style={defaultStyles.btnTextSecondary}>Sign Up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome