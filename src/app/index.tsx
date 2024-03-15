import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import { router, useNavigation } from 'expo-router'

const Welcome = () => {
  
  return (
    <View>
        {/* icon header bar */}
      <View>
        <Image source={require('../../assets/images/toastLogo.png')}/>
      </View>

      {/* Welcome Text */}
      <View>
        <Text>Hello,</Text>
        <Text>Welcome to ButterPal, a place where you can help a pal, or ask a pal for help</Text>
      </View>

      {/* Login/Signup Buttons  */}
      <View>
        <TouchableOpacity style={defaultStyles.btnPrimary} onPress={()=>router.push('(auth)/login')}><Text>Log in</Text></TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnSecondary} onPress={()=>router.push('/(auth)/(signup)/signup')}><Text>Sign Up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome