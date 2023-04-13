export interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  brand: string;
  rating: number;
  images: string[];
  stock: number;
  discountPercentage: number;
}
export interface ProductResponse {
  products: Array<IProduct>;
}
