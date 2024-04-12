export type Item = {
  id: number;
  uri: string | null;
  name: string;
  price: number;
};

export type CartItem = {
  id: string;
  item: Item;
  quantity: number;
};

export const RequestStatusList: RequestStatus[] = [
  'New',
  'Accepted',
  'Purchased',
  'Delivered',
];

export type RequestStatus = 'New' | 'Accepted' | 'Purchased' | 'Delivered';

export type RequestType = {
  id: number;
  created_at: string;
  total_cost: number;
  user_id: string;
  location: string;
  deadline: string;
  status: RequestStatus;
  request_items: RequestItem[];
};

export type RequestItem = {
  item: Item;
  request_id: number;
  quantity: number;
};

export type Profile = {
  id: string;
  group: string;
};
