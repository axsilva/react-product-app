import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { deleteProduct, getProducts, searchProducts } from "../services/api";
import type { Product } from "../types/product";
import { Link } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadProducts = async () => {
    try {
      const products = await getProducts();
      setProducts(products);
    } catch (err) {
      console.error(err);
      setError("Failed to load products...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const removeProduct = async (id: number) => {
    try {
      await deleteProduct(id);
    } catch (err) {
      console.error(err);
      setError("Failed to delete product...");
    } finally {
      await loadProducts();
    }
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);

    try {
      const searchResults = await searchProducts(searchQuery);
      setProducts(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search products...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid text-center">
      <form onSubmit={handleSearch} className="row mb-5">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(event.target.value)
            }
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-danger">
            Search
          </button>
        </div>
        <div className="col-2">
          <Link to="/product/new">
            <button type="submit" className="btn btn-primary">
              New product
            </button>
          </Link>
        </div>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="row">
          {products.map((product: Product) => (
            <ProductCard
              product={product}
              onRemove={removeProduct}
              key={product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
