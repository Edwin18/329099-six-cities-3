export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type User = {
  id: number;
  name: string;
  is_pro: boolean;
  avatar_url: string;
  email?: string;
}

export type UserLogin = {
  login: string;
  password: any;
}

export type Review = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}

export type Offer = {
  id: number;
  city: City;
  preview_image: string;
  images: Array<string>;
  title: string;
  is_favorite: boolean;
  is_premium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  max_adults: number;
  price: number;
  goods: Array<string>;
  host: User;
  description: string;
  location: Location;
}
