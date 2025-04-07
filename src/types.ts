export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  category: Category;
  image: string;
}

export type Category = 
  | 'green'
  | 'white'
  | 'red'
  | 'light-oolong'
  | 'dark-oolong'
  | 'shu-puerh'
  | 'sheng-puerh'
  | 'ceremony';

export interface CartItem extends Product {
  quantity: number;
}