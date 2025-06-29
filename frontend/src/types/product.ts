import type { ReactNode } from "react";

export interface Product {
    id: number;
    title: string;
    images?: string[];
    price: string;
}

export interface ProductContextType {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}

export interface ProductProviderProps {
  children: ReactNode;
}