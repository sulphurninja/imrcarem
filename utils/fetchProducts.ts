import { Product } from "../typings";

export const fetchProducts = async () => {
  const res = await fetch(
    `https://imrcarem.vercel.app/api/getProducts`
  );

  const data = await res.json();
  const products: Product[] = data.products;

  return products;
};
