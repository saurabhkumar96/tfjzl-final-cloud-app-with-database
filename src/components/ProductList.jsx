import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  const plants = [
    // Indoor Plants
    { id: 1, name: "Snake Plant", price: 10, category: "Indoor", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Peace Lily", price: 12, category: "Indoor", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Aloe Vera", price: 8, category: "Indoor", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Spider Plant", price: 9, category: "Indoor", image: "https://via.placeholder.com/150" },
    { id: 5, name: "ZZ Plant", price: 14, category: "Indoor", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Rubber Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/150" },

    // Outdoor Plants
    { id: 7, name: "Rose", price: 11, category: "Outdoor", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Tulsi", price: 6, category: "Outdoor", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Hibiscus", price: 13, category: "Outdoor", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Marigold", price: 7, category: "Outdoor", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Jasmine", price: 9, category: "Outdoor", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Sunflower", price: 10, category: "Outdoor", image: "https://via.placeholder.com/150" },

    // Succulents
    { id: 13, name: "Echeveria", price: 5, category: "Succulent", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Haworthia", price: 6, category: "Succulent", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Jade Plant", price: 8, category: "Succulent", image: "https://via.placeholder.com/150" },
    { id: 16, name: "Cactus", price: 7, category: "Succulent", image: "https://via.placeholder.com/150" },
    { id: 17, name: "Sedum", price: 6, category: "Succulent", image: "https://via.placeholder.com/150" },
    { id: 18, name: "Agave", price: 9, category: "Succulent", image: "https://via.placeholder.com/150" },
  ];

  const categories = ["Indoor", "Outdoor", "Succulent"];

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.nav}>
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/plants" style={styles.link}>Plants</Link>
          <Link to="/cart" style={styles.link}>Cart</Link>
        </div>
      </nav>

      {/* Product Section */}
      {categories.map((category) => (
        <div key={category}>
          <h2 style={styles.category}>{category} Plants</h2>
          <div style={styles.grid}>
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <div key={plant.id} style={styles.card}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAdd(plant)}
                    disabled={addedItems[plant.id]}
                  >
                    {addedItems[plant.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#2c7a7b",
    color: "white",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
  },
  category: {
    marginTop: "20px",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    textAlign: "center",
    width: "150px",
  },
};

export default ProductList;