import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { RequestType } from "@/constants/types";
import { Link, router } from "expo-router";

type RequestProps = {
  request: RequestType;
};

const Request = ({ request }: RequestProps) => {
  return (
    <Pressable
      style={styles.requestContainer}
      onPress={() => router.push(`/home/${request.id}`)}
    >
      <View>
        <View style={{ ...styles.flexContainer, marginBottom: 3 }}>
        <Text style={styles.h2}>
        Help Needed: {request.request_items.length}{" "}
        {request.request_items.length < 2 ? "item" : "items"}
      </Text>
          <Text style={styles.small}>Posted on {request.created_at}</Text>
        </View>
        <Text style={styles.small}>1.5km away</Text>

        {/* Display Items Container */}
        <View style={styles.itemsContainer}>
            {request.request_items.length > 3 ? request.request_items.slice(0, 3).map(({ item }) => (
            <View key={item.id}>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={styles.image}
                  source={{ uri: item.uri || "../../assets/images/apple.png" }}
                />
                <Text>{item.name}</Text>
              </View>
            </View>
          )) : request.request_items.map(({ item }) => (
            <View key={item.id}>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={styles.image}
                  source={{ uri: item.uri || "../../assets/images/apple.png" }}
                />
                <Text>{item.name}</Text>
              </View>
            </View>
          )) }
            {request.request_items.length > 3 ? <View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={styles.small}>and {request.request_items.length - 3} more items...</Text>
              </View>
            </View> : null }

          {/* {request.request_items.map(({ item }) => (
            <View key={item.id}>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={styles.image}
                  source={{ uri: item.uri || "../../assets/images/apple.png" }}
                />
                <Text>{item.name}</Text>
              </View>
            </View>
          ))} */}
        </View>
        <View style={styles.flexContainer}>
          <Text>By: {request.deadline}</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={24} />
        </View>
      </View>
    </Pressable>
  );
};

export default Request;

const styles = StyleSheet.create({
  requestContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    padding: 16,
    marginVertical: 16,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
    marginTop: 8,
    alignItems: "center"
  },
  h2: {
    fontSize: 16,
    fontFamily: "Inter600",
  },
  small: {
    fontSize: 10,
    fontFamily: "Inter400",
  },
  image: {
    width: 80,
    height: 90,
    objectFit: "contain",
  },
});
