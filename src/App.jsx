import React, { useState, useEffect } from 'react';
import Header from "./Header"
import './styles/App.css'
import './styles/index.css';


function App() {
  const [products, setProducts] = useState([]);
  const [randomProductId, setRandomProductId] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
       fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const randomize = () => {
    const randomProductId = Math.floor(Math.random() * products.length) + 1;
    setRandomProductId(randomProductId);
    setShowAllProducts(false);
  };


  const filteredProducts = randomProductId
    ? products.filter((product) => product.id === randomProductId)
    : products;

     function ratingToStars(rating) {
  let stars = '';
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  
  return stars;
}


  return (
         <>
    <Header />
    <div className="app">
     
          <button className='random-btn'
            onClick={randomize}
          >
            Get a random Product
          </button>

          <div className='container'>
           
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <div className="card">
                  <div>
                    <div className='left'>
                      <h1 className='title'>{product.title}</h1>
                      <p >
                        {product.description}
                      </p>
                      <p>Special-Price: {product.price}</p>
                      <button className='button'>Add to Cart</button>
                      
                    </div>
                    <div className='right'>
                      <img className='image' src={product.thumbnail} alt={product.title} />
                      <p className='rating'>{ratingToStars(product.rating)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    
    
    </>
  );
}

export default App;