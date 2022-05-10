import { Fridge } from "./fridge";

export interface Item {
  id: string;
  name: string;
  image: string;
  expired_at: string;
  cost: string;
  pivot: {
    purchased_count: number;
  };
}

export interface Order {
  id?: string;
  fridge: Fridge;
  fridge_name: string;
  purchased_price: string;
  locationName: string;
  time: string;
  items?: Item[];
}
