import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const Request = () => {
  return (
    <View style={styles.requestContainer}>
        <View>
            <View style={{...styles.flexContainer, marginBottom: 3}}>
                <Text style={styles.h2}>Help Needed: 3 items</Text>
                <Text style={styles.small}>Posted 1 week ago</Text>
            </View>
                <Text style={styles.small}>1.5km away</Text>
                <View style={{...styles.flexContainer, marginBottom: 24, marginTop: 8}}>
                    <View>
                        <Image style={styles.image} source={require('../../assets/images/toastLogo.png')}/>
                        <Text>Apples</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/toastLogo.png')}/>
                        <Text>Butter</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/toastLogo.png')}/>
                        <Text>Soy Sauce</Text>
                    </View>
                </View>
                <View style={styles.flexContainer}>
                    <Text>By: Today</Text>
                    <Ionicons name="ellipsis-horizontal-outline" size={24}/>
                </View>
        </View>
    </View>
  )
}

export default Request

const styles = StyleSheet.create({
    requestContainer: {
      backgroundColor: Colors.white,
      borderColor: Colors.lightGrey,
      borderWidth: 1,
      padding: 16,
    },
    flexContainer: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    h2: {
      fontSize: 16,
      fontFamily: 'Inter600',
    },
    small: {
        fontSize: 10,
        fontFamily: 'Inter400',
    },
    image: {
        width: 80,
        height: 90,
        objectFit: 'contain'
    }
  });