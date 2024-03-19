import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <View style={defaultStyles.container}>
      <View style={{ height: "10%", marginBottom: 6 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={require("@/../assets/images/backButton.png")} />
        </TouchableOpacity>
      </View>

      <View style={{ height: "60%" }}>
        <Text style={defaultStyles.subHeader}>Create your account</Text>
        <View style={defaultStyles.formContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={defaultStyles.inputField}
            placeholderTextColor={Colors.darkGrey}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            style={defaultStyles.inputField}
            placeholderTextColor={Colors.darkGrey}
          />
          <TextInput
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeholder="Confirm Password"
            style={defaultStyles.inputField}
            placeholderTextColor={Colors.darkGrey}
          />
        </View> 
      </View>
        {/* Next Button  */}
        <View style={{ gap: 8 }}>
          <TouchableOpacity
            style={defaultStyles.btnPrimary}
            onPress={() => router.push("/(auth)/(signup)/createProfile")}
          >
            <Text style={defaultStyles.btnTextPrimary}>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default signup;
