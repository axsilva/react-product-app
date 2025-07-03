import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { deleteProduct, getProducts, searchProducts } from "../services/api";
import type { Product } from "../types/product";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

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
    <Container fluid className="text-center">
      <Form onSubmit={handleSearch}>
        <Row className="mb-5">
          <Col xs={8}>
            <Form.Control
              className="form-control"
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(event.target.value)
              }
            />
          </Col>
          <Col xs={2}>
            <Button type="submit" className="btn btn-danger">
              Search
            </Button>
          </Col>
          <Col xs={2}>
            <Link to="/product/new">
              <Button type="submit" className="btn btn-primary">
                New product
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
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
    </Container>
  );
}

export default Home;
