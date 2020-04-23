import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const category = "Running";
  const price = 74000000;

  return (
    <div className="ParentBox">
      <div className="Image">
        <img src="sample.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">Black Swagg</h1>
        <p className="Price">IDR {price}</p>
        <p className="Info">One of the most react shoes in the AJ 
        Collection, Black sneakers have earned their own aesthetic ranking in the modern male wardrobe. As a staple footwear piece they can be paired with various popular looks ranging from classic denim to luxe streetwear to leather jackets.</p>
      </div>
    </div>
  );
}

export default App;
