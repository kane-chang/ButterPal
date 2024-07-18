import { View, Text, FlatList, FlatListComponent } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Request from '@/components/Request'
import DATA from '../../../../assets/sample_data/requests'


const homepage = () => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Request Board</Text>
      <View>
        <FlatList data={DATA} renderItem={({item}) => <Request request={item}/>} keyExtractor={item=>item.id.toString()}/>
      </View>
    </View>
  )
}

export default homepage