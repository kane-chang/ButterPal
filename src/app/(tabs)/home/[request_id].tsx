import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Request from "@/components/Request";
import { useLocalSearchParams } from "expo-router";
import DATA from "../../../../assets/sample_data/requests";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const RequestDetails = () => {
  const { request_id } = useLocalSearchParams();

  const request = DATA.find((r) => r.id.toString() === request_id);

  if (!request) {
    return <Text>request not found</Text>;
  }

  return (
    <ScrollView>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header2}>
        Help a pal with {request.request_items.length}{" "}
        {request.request_items.length < 2 ? "item" : "items"}
      </Text>
      <View style={styles.statusBanner}>
        <Ionicons name="ellipse" color={Colors.orange} size={16} />
        <Text style={defaultStyles.body}>Waiting for a helpful pal</Text>
      </View>
      <View style={styles.location}>
        <Ionicons name="location-outline" size={16} />
        <Text style={defaultStyles.inter500}>{request.location}</Text>
      </View>
      <View>
      <FlatList
        data={request.request_items}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={styles.itemContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: item.item.uri || "../../../../assets/images/apple.png",
                }}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.itemHeader}>{item.item.name}</Text>
                <Text style={styles.itemCost}>£{item.item.price}</Text>
                <Text style={styles.miniText}>If unavailable:</Text>
                <View style={styles.unavailabilityBox}>
                  <Text style={styles.unavailabilityText}>
                    {item.if_unavailable}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.request_id.toString()}
      />
      </View>
      
      {/* <View style={styles.itemCard}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/apple.png')}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.itemHeader}>item name</Text>
            <Text style={styles.itemCost}>item cost</Text>
            <Text style={styles.miniText}>If unavailable:</Text>
            <View style={styles.unavailabilityBox}>
              <Text style={styles.unavailabilityText}>unavailable option</Text>
            </View>
          </View>
        </View>
      </View> */}

      <Text style={styles.notesText}>Delivery Notes: {request.notes}</Text>
      <Text style={{...defaultStyles.body, marginBottom: 16, fontSize: 14}}>Description: {request.desc}</Text>
      <Text style={styles.boldText}>Need items by: {request.deadline}</Text>
      <View style={styles.posterContainer}>
        <Text style={styles.boldText}>Posted by:</Text>
        <View style={{display:'flex', flexDirection:'row', gap: 8}}>
        <Ionicons name='person-outline' size={32}/>
        <Text style={styles.boldText}>{request.user_id}</Text>
        </View>
        <Text style={styles.deadlineText}>{request.deadline}</Text>
      </View>
      <TouchableOpacity style={defaultStyles.btnSecondary}>
        <Text style={defaultStyles.btnTextSecondary}>I can help!</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  statusBanner: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.cream,
    padding: 10,
    gap: 10,
    marginVertical: 10,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  itemCard: {
    display: "flex",
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 8,
    marginBottom: 16,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  infoContainer: {
    display: "flex",
    flex: 1,
    gap: 4,
  },
  image: {
    width: 92,
    height: 92,
    objectFit: "contain",
  },
  itemHeader: {
    fontFamily: "Inter600",
    fontSize: 16,
  },
  itemCost: {
    fontFamily: "Inter400",
    fontSize: 14,
    color: Colors.darkGrey,
  },
  miniText: {
    fontFamily: "Inter400",
    fontSize: 10,
  },
  unavailabilityBox: {
    padding: 7,
    backgroundColor: Colors.lightGrey,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 16,
  },
  unavailabilityText: {
    fontFamily: "Inter400",
    fontSize: 12,
  },
  notesText: {
    fontFamily: "Inter400",
    fontSize: 14,
    marginTop: 16,
  },
  posterContainer: {
    display: "flex",
    marginTop: 24,
    marginBottom: 54,
    gap: 8,
  },
  boldText: {
    fontFamily: "Inter600",
    fontSize: 16,
  },
  deadlineText: {
    fontFamily: "Inter500",
    fontSize: 10
  }
});

export default RequestDetails;
