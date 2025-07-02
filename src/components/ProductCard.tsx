import type { Product, ProductContextType } from "../types/product";
import { useProductContext } from "../contexts/ProductContext";

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
    <div className="col p-2">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={images?.[0]} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}$</p>
          <button
            className={`btn btn-${favorite ? "danger" : "secondary"} m-1`}
            onClick={onFavoriteClick}
          >
            <i className="bi bi-heart"></i>
          </button>
          <button className={`btn btn-secondary m-1`} onClick={onRemoveProduct}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
