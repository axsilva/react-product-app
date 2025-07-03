import type { Product, ProductContextType } from "../types/product";
import { useProductContext } from "../contexts/ProductContext";
import { Button, Card, Col } from "react-bootstrap";

function ProductCard({ product, onRemove }) {
  const { id, title, images, price }: Product = product;
  const {
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  }: ProductContextType | undefined = useProductContext();
  const favorite: boolean = isFavorite(product.id);

  function onFavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) removeFromFavorites(product.id);
    else addToFavorites(product);
  }

  async function onRemoveProduct() {
    onRemove(id);
  }

  return (
    <Col className="p-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={images?.[0]} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}$</Card.Text>
          <Button
            variant={`${favorite ? "danger" : "secondary"}`}
            className="m-1"
            onClick={onFavoriteClick}
          >
            <i className="bi bi-heart"></i>
          </Button>
          <Button variant="secondary" className="m-1" onClick={onRemoveProduct}>
            <i className="bi bi-trash"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
