
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowMyWork.css';

function ShowMyWork() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
  try {
    const res = await axios.get("https://backenddukkan.onrender.com/api/products");
    console.log("API Response:", res.data);

    // Handle different possible shapes
    let data = [];
    if (Array.isArray(res.data)) {
      data = res.data;
    } else if (Array.isArray(res.data.products)) {
      data = res.data.products;
    } else if (Array.isArray(res.data.data)) {
      data = res.data.data;
    }

    setProducts(data);
  } catch (err) {
    console.error("Fetch error:", err);
    setProducts([]); // fallback to empty
  }
};

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://backenddukkan.onrender.com/api/products/${id}`);
      setProducts(products.filter(item => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="products-container">
      {products.map((item) => (
        <div key={item._id} className="product-card">
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
          <button onClick={() => deleteProduct(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShowMyWork;

