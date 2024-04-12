import { View, Text, FlatList, FlatListComponent } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Request from '@/components/Request'
import { RequestType } from '@/constants/types'

const DATA: RequestType[] = [
  {
    id: 1,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        }
      },
      {
        request_id: 1,
        quantity: 1,
        item: {
          id: 122,
          uri: 'https://pngimg.com/d/butter_PNG12.png',
          name: 'Butter',
          price: 3.0
        }
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Butter',
          price: 4.0
        }
      }

    ]
  },
  {
    id: 2,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        }
      },
    ]
  },
  {
    id: 3,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Butter',
          price: 4.0
        }
      }

    ]
  },
  {
    id: 4,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        }
      },

    ]
  },
  {
    id: 5,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        }
      },
      {
        request_id: 1,
        quantity: 1,
        item: {
          id: 122,
          uri: 'https://pngimg.com/d/butter_PNG12.png',
          name: 'Butter',
          price: 3.0
        }
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Butter',
          price: 4.0
        }
      }

    ]
  },
  {
    id: 6,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        }
      },
      {
        request_id: 1,
        quantity: 1,
        item: {
          id: 122,
          uri: 'https://pngimg.com/d/butter_PNG12.png',
          name: 'Butter',
          price: 3.0
        }
      },

    ]
  },
  {
    id: 7,
    created_at: '1111',
    total_cost: 10,
    user_id: 'abc',
    location: 'w60ne',
    deadline: '2222',
    status: 'Accepted',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        }
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Butter',
          price: 4.0
        }
      }

    ]
  },
]

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