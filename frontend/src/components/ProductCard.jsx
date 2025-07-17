import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, onOpenDetail }) => {
  return (
    <div className="product-card" onClick={onOpenDetail}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p className="price">${product.price}</p>
      <button
        className="add-to-cart"
        onClick={(e) => {
          e.stopPropagation(); // stop modal from opening
          onAddToCart();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
