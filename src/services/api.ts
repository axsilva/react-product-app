const BASE_URL = "http://localhost:3000";

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

export const addProduct = async (product: any) => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  const data = await response.json();

  return data;
};
