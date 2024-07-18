import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';

const createProfile2 = () => {
    const [address, setAddress] = useState("");
    const [postcode, setPostcode] = useState("");
  
    return (
      <View style={defaultStyles.container}>
        <View style={{ height: "10%", marginBottom: 6 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={require("@/../assets/images/backButton.png")} />
          </TouchableOpacity>
        </View>
  
        <View style={{ height: "60%" }}>
          <Text style={defaultStyles.subHeader}>Add your address</Text>
          <View style={defaultStyles.formContainer}>
            <TextInput
              value={address}
              onChangeText={setAddress}
              placeholder="Address (should require verification/dropdown)"
              style={defaultStyles.inputField}
              placeholderTextColor={Colors.darkGrey}
            />
            <TextInput
              value={postcode}
              onChangeText={setPostcode}
              placeholder="Postcode"
              style={defaultStyles.inputField}
              placeholderTextColor={Colors.darkGrey}
            />
          </View>
        </View>
          {/* Next Button  */}
          <View style={{ gap: 8 }}>
            <TouchableOpacity
              style={defaultStyles.btnSecondary}
              onPress={() => router.replace("/(tabs)/home/homepage")}
            >
              <Text style={defaultStyles.btnTextPrimary}>Confirm Account</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
    };

export default createProfile2