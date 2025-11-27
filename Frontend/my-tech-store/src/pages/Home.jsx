import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce"; 
import { useCart } from "../context/CartContext";

export default function Home() {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
  const { addToCart } = useCart();

  
  const [searchTerm, setSearchTerm] = useState("");
  
  const debouncedSearch = useDebounce(searchTerm, 500);


  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [products, debouncedSearch]);

  if (loading) return <div className="center-text">Loading awesome tech...</div>;
  if (error) return <div className="center-text error">Error: {error}</div>;

  return (
    <div className="container">
      <div className="header-row">
        <h1>Latest Products</h1>
        

        <input 
          type="text" 
          placeholder="Search products..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
        
        {filteredProducts.length === 0 && (
           <div className="no-results">No products found for "{debouncedSearch}"</div>
        )}
      </div>
    </div>
  );
}