import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import Request from "@/components/Request";
import { useLocalSearchParams } from "expo-router";
import DATA from "../../../../assets/sample_data/requests";
import { defaultStyles } from "@/constants/Styles";

const RequestDetails = () => {
  const { request_id } = useLocalSearchParams();

  const request = DATA.find((r) => r.id.toString() === request_id);

  if (!request) {
    return <Text>request not found</Text>;
  }

  return (
    <View style={defaultStyles.container}>
      {request.request_items.length < 2 ? (
        <Text style={defaultStyles.header}>
          Help a pal with {request.request_items.length} item
        </Text>
      ) : (
        <Text style={defaultStyles.header}>
          Help a pal with {request.request_items.length} items
        </Text>
      )}
      <Request request={request} />

      <Text>Total cost of items: £{request.total_cost}</Text>
      <Text>Request Status: {request.status}</Text>
      <TouchableOpacity style={defaultStyles.btnPrimary}>
        <Text style={defaultStyles.btnTextPrimary}>Accept Request!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestDetails;
