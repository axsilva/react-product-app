import { createContext, useContext, useEffect, useState } from "react";
import {
  type ProductContextType,
  type Product,
  type ProductProviderProps,
} from "../types/product";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavs: string | null = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product: Product): void =>
    setFavorites((prev: Product[]) => [...prev, product]);

  const removeFromFavorites = (productId: number): void =>
    setFavorites((prev: Product[]) =>
      prev.filter((product: Product) => product.id !== productId)
    );

  const isFavorite = (productId: number): boolean =>
    favorites.some((product: Product) => product.id === productId);

  const value: ProductContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
