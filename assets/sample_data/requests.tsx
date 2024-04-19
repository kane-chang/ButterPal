import { RequestType } from '@/constants/types'

const DATA: RequestType[] = [
  {
    id: 1,
    created_at: '1111',
    total_cost: 10,
    user_id: 'gbbo_contestant',
    desc: 'Need this for my gran!',
    notes: 'call my number',
    location: 'w60ne',
    deadline: '2222',
    status: 'New',
    request_items: [
      {
        request_id: 1,
        quantity: 2,
        item: {
          id: 111,
          uri: 'https://static.vecteezy.com/system/resources/previews/023/290/775/original/fresh-red-apple-isolated-on-transparent-background-generative-ai-png.png',
          name: 'Apple',
          price: 2.5
        },
        if_unavailable: 'Don\'t buy'
      },
      {
        request_id: 1,
        quantity: 1,
        item: {
          id: 122,
          uri: 'https://pngimg.com/d/butter_PNG12.png',
          name: 'Butter',
          price: 3.0
        },
        if_unavailable: 'Don\'t buy'
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Buy any alternative',
      }

    ]
  },
  {
    id: 2,
    created_at: '1111',
    total_cost: 10,
    user_id: 'loving_mom',
    desc: 'Baking my son birthday cake',
    notes: null,
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
        },
        if_unavailable: 'Don\'t buy',
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy',
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy',
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy',
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy',
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy',
      }
    ]
  },
  {
    id: 3,
    created_at: '1111',
    total_cost: 10,
    user_id: 'jacky',
    desc: 'Help me please',
    notes: 'You can knock three times',
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
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy',
      }

    ]
  },
  {
    id: 4,
    created_at: '1111',
    total_cost: 10,
    user_id: 'fakeuser',
    desc: 'Hungry',
    notes: 'Leave at door',
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
        },
        if_unavailable: 'Don\'t buy',
      },

    ]
  },
  {
    id: 5,
    created_at: '1111',
    total_cost: 10,
    user_id: 'samuelson',
    desc: 'super appreciate it',
    notes: null,
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
        },
        if_unavailable: 'Don\'t buy',
      },
      {
        request_id: 1,
        quantity: 1,
        item: {
          id: 122,
          uri: 'https://pngimg.com/d/butter_PNG12.png',
          name: 'Butter',
          price: 3.0
        },
        if_unavailable: 'Don\'t buy'
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Soy Sauce',
          price: 4.0
        },
        if_unavailable: 'Buy cheapest alternative',
      }

    ]
  },
  {
    id: 6,
    created_at: '1111',
    total_cost: 10,
    user_id: 'hunky',
    desc: 'you won\'t regret it',
    notes: null,
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
        },
        if_unavailable: 'Don\'t buy'
      },
      {
        request_id: 1,
        quantity: 1,
        item: {
          id: 122,
          uri: 'https://pngimg.com/d/butter_PNG12.png',
          name: 'Butter',
          price: 3.0
        },
        if_unavailable: 'Don\'t buy',
      },

    ]
  },
  {
    id: 7,
    created_at: '1111',
    total_cost: 10,
    user_id: 'skeptical_susan',
    desc: 'does this app work?',
    notes: null,
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
        },
        if_unavailable: 'Don\'t buy'
      },
      {
        request_id: 1,
        quantity: 5,
        item: {
          id: 123,
          uri: 'https://kikkomanusa.com/homecooks/wp-content/uploads/2023/05/00041390000010_A1N1___15.png',          
          name: 'Butter',
          price: 4.0
        },
        if_unavailable: 'Don\'t buy'
      }

    ]
  },
]

export default DATA