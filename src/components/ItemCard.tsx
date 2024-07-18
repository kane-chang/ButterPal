import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { RequestItem } from "@/constants/types";
import Colors from "@/constants/Colors";

type ItemCardProps = {
    item: RequestItem;
}

const ItemCard = ({item}: ItemCardProps) => {
  return (
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
            <Text style={styles.unavailabilityText}>{item.if_unavailable}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
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
  });
  

export default ItemCard;
