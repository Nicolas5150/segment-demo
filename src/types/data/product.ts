export type Product = {
  title: string;
  uuid: string;
  price: string;
  body: string;
  image: string;
};

export type Products = {
  [key: string]: Product[];
};
