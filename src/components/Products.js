import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h2>Ürünler Listesi</h2>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Henüz ürün yok.</p>
      )}
    </div>
  );
};

export default Products;
