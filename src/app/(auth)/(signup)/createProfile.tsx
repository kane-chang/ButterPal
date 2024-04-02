import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';

const createProfile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
  
    return (
      <View style={defaultStyles.container}>
        <View style={{ height: "10%", marginBottom: 6 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require("@/../assets/images/backButton.png")} />
          </TouchableOpacity>
        </View>
  
        <View style={{ height: "60%" }}>
          <Text style={defaultStyles.subHeader}>Create your profile</Text>
          <View style={defaultStyles.formContainer}>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              style={defaultStyles.inputField}
              placeholderTextColor={Colors.darkGrey}
            />
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              style={defaultStyles.inputField}
              placeholderTextColor={Colors.darkGrey}
            />
            <TextInput
              value={country}
              onChangeText={setCountry}
              placeholder="Country (dropdown)"
              style={defaultStyles.inputField}
              placeholderTextColor={Colors.darkGrey}
            />
            <TextInput
              value={city}
              onChangeText={setCity}
              placeholder="City"
              style={defaultStyles.inputField}
              placeholderTextColor={Colors.darkGrey}
            />
          </View>
        </View>
          {/* Next Button  */}
          <View style={{ gap: 8 }}>
            <TouchableOpacity
              style={defaultStyles.btnPrimary}
              onPress={() => router.push("/(auth)/(signup)/createProfile2")}
            >
              <Text style={defaultStyles.btnTextPrimary}>Next</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
    };

export default createProfile