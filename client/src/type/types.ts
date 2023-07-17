export type UserLoginInfo = {
  email: string;
  password: string;
};

export type UserCreateAccountInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
  material: string;
  color: string;
  insole: string;
  outsole: string;
  heel_height: string;
  heel_type: string;
  sale: boolean;
};

export type CartProduct = Product & {
  cartQuantity: number;
  total: number;
};

export type SortOrder = "asc" | "desc";
