import React from 'react';
import logo from './logo.svg';
import './App.css';

  function App() {
    return (
      <div>
        <Header />
        <div className="ParentBox">
          <Image />
          <ProdukInfo category="Sneakers" name="Black Swagg" />
        </div>
        <div className="ParentBox">
          <Image />
          <ProdukInfo category="Sport" name="White Sneakers" />
        </div>
      </div>
    );
  }

  function Image(props) {
    const {photo} = props ;
    
    return (
      <div className="Image">
        <img src="sample.jpg" />
        {photo}
      </div>
    );
  }

  function ProdukInfo(props) {
    const {category, name, isDiscount} = props ;

    return (
      <div>
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title">{name}</h1>
          <p className="Price">IDR 7.399.999</p>
          <p className="Info">One of the most best shoes in the AJ 
          Collection, Black sneakers have earned their own aesthetic ranking in the modern male wardrobe. As a staple footwear piece they can be paired with various popular looks ranging from classic denim to luxe streetwear to leather jackets.</p>
          <div className="counter">
              <button onClick={(e) => AddCart(name, e)} className="btn">Add to Cart</button>
              <button className="minus">-</button>
                <input type="text" value="1"/>
              <button className="plus">+</button>
          </div>
        </div>
      </div>
    );
  }

  function AddCart(e) {
    return console.log(('Add Item ' + e + ' Success'));
  }

  function Header() {
    return(
      <div className="header">
        <div className="troley"><br />
            <div className="count">1</div>
        </div>
      </div>
    )
  }

export default App;
