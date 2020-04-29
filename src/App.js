import React from 'react';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

  function App() {
    return (
      <div>
        <Header />
        <div className="ParentBox">
          <Image />
          <ProdukInfo category="Sneakers" name="Black Swagg" isDiscount="yes" />
          <ReviewItems />
  
          <Image />
          <ProdukInfo category="Sport" name="White Sneakers" isDiscount="coming" />
          <ReviewItems />
        </div>
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

  function CheckDiscount(props) {
    const { isDiscount, discount } = props;

    if(isDiscount == "yes"){
      return(
        <p>Discount {discount}% off</p>
      );
    }
    else if(isDiscount == "coming"){
      return(
        <p>Discount Coming Soon</p>
      );
    }
    else {
      return(
        <p>Not Discount</p>
      );
    }
  }

  function ProdukInfo(props) {
    const {category, name, isDiscount} = props ;
    const benefit = ["New Space", "Best Quality", "Exclusive"];
    const listBenefit = benefit.map((itemBenefit) =>
      <li key={itemBenefit}> { itemBenefit } </li>
    );

    return (
      <div>
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
              <p className="Price">IDR 7.399.999</p>
                <CheckDiscount isDiscount={isDiscount} discount={40} />
                  <p className="Info">One of the most best shoes in the AJ 
                  Collection, Black sneakers have earned their own aesthetic ranking in the modern male wardrobe. As a staple footwear piece they can be paired with various popular looks ranging from classic denim to luxe streetwear to leather jackets.</p>
                  <ul>
                    { listBenefit }
                  </ul>
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
  
  CheckDiscount.propTypes = {
    discount: PropTypes.number
  };

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
