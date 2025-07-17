import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import CartSidebar from "../components/CartSidebar";
import ProductModal from "../components/ProductModal";
import "../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = category === "All" ? products : products.filter(p => p.category === category);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartOpen(true);
  };

  const handleRemove = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <div className="container">
      <h1>Product Catalog</h1>
      <FilterBar setCategory={setCategory} />

      <div className="products-grid">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            onOpenDetail={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      <CartSidebar
        cartItems={cartItems}
        onRemove={handleRemove}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
    </div>
  );
};

export default Home;
