import "./CartSidebar.css";

const CartSidebar = ({ cartItems, onRemove, isOpen, onClose }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <button onClick={() => onRemove(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <strong>Total: </strong>${total}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
