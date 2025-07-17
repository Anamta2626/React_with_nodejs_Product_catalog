import "./ProductModal.css";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-modal" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;
