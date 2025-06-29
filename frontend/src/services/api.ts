const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data.products;
};

export const searchProducts = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/products/search?q=${encodeURIComponent(query)}`
  );
  const data = await response.json();

  return data.products;
};
