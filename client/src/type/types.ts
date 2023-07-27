export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
};

export type Product = {
  _id: string;
  title: string;
  image: string;
  additionalImage: string[];
  price: number;
  product_details: string;
  category: string;
  sizes: string[];
  productInfo: {
    material: string;
    color: string;
    insole: string;
    outsole: string;
    heel_height: string;
    heel_type: string;
  };
  sale: boolean;
};

export type CartProduct = Product & {
  cartQuantity: number;
  selectedSize: string | null;
};

export type Order = {
  _id: string;
  userId: string;
  productList: CartProduct[];
  createdAt: string;
};
