
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
      const res = await axios.get("https://backend-dukkan.vercel.app/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://backend-dukkan.vercel.app/api/products/${id}`);
      setProducts(products.filter(item => item._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="products-container">
      {products.map((item) => (
        <div key={item._id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => deleteProduct(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShowMyWork;

