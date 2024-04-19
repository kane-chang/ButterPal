import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Request from '@/components/Request'
import { useLocalSearchParams } from 'expo-router';
import DATA from '../../../../assets/sample_data/orders';
import { defaultStyles } from '@/constants/Styles';

const RequestDetails = () => {
	const {order_id} = useLocalSearchParams();


  const order = DATA.find((o)=> o.id.toString() === order_id)

  if (!order) {
    return <Text>Order not found</Text>
  }

	return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>{order.desc}</Text>
      <Request request={order}/>
      
      <Text>Total cost of items: £{order.total_cost}</Text>
      <Text>Request Status: {order.status}</Text>
      <TouchableOpacity style={defaultStyles.btnPrimary}><Text style={defaultStyles.btnTextPrimary}>Accept Request!</Text></TouchableOpacity>
    </View>
  	)
}

export default RequestDetails