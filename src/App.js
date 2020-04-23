import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ParentBox">
      <Image />
      <ProdukInfo category="Sneakers" name="Black Swagg" />
    </div>
  );
}

function Image() {
  return (
    <div className="Image">
      <img src="sample.jpg" />
    </div>
  );
}

function ProdukInfo(props) {
  const {category, name} = props ;

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 7.400.999</p>
        <p className="Info">One of the most react shoes in the AJ 
        Collection, Black sneakers have earned their own aesthetic ranking in the modern male wardrobe. As a staple footwear piece they can be paired with various popular looks ranging from classic denim to luxe streetwear to leather jackets.</p>
      </div>
    </div>
  );
}

export default App;
