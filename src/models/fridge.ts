export interface Fridge {
  id: string;
  name: string;
  location: {
    city: string;
    name: string;
    district: string;
    latitude: number;
    longitude: number;
  };
}
