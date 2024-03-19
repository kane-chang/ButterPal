import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, Image, View, Platform } from "react-native";

const headerOptions = {
  headerRight: () => (
    <View style={{display:'flex', flexDirection:'row', marginRight: 24,}}>
      <Ionicons name="filter" size={24} />
      <Text
        style={{ marginLeft: 6, fontFamily: "Inter" }}
      >
        Sort
      </Text>
    </View>
  ),
  headerLeft: () => (
    <Image
      source={require("@/../assets/images/toastLogo.png")}
      style={{ marginLeft: 24 }}
    />
  ),
  title: undefined,
}

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.secondaryGreen,
        tabBarInactiveTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.primaryGreen,
        tabBarInactiveBackgroundColor: Colors.primaryGreen,
        tabBarLabelStyle: {
          fontFamily: "Inter",
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryGreen
        }
      }}
    >
      <Tabs.Screen
        name="homepage"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          ...headerOptions
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
          ...headerOptions
        }}
      />
      <Tabs.Screen
        name="addRequest"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={42} />
          ),
          ...headerOptions
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
          ...headerOptions
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
          ...headerOptions
        }}
      />
    </Tabs>
  );
};

export default Layout;


