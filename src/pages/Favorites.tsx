import { useProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";
import type { Product, ProductContextType } from "../types/product";
import { Container, Row } from "react-bootstrap";

function Favorites() {
  const { favorites }: ProductContextType | undefined = useProductContext();

  if (favorites.length > 0) {
    return (
      <Container fluid className="text-center">
        <h2>Your Favorites</h2>
        <Row>
          {favorites.map((favorite: Product) => (
            <ProductCard
              product={favorite}
              onRemove={() => {}}
              key={favorite.id}
            />
          ))}
        </Row>
      </Container>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Product Yet!</h2>
      <p>Start adding products to your favorites and they will appear here.</p>
    </div>
  );
}

export default Favorites;
