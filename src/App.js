import React, { useState } from 'react';
import './App.css';
import ReviewItems from './Reviews';

  function App() {
    const [changeName, setChangeName] = useState('Dior Limited')
    const [isDiscount, setIsDiscount] = useState('coming')
    const [cart, setCart] = useState(0);
    const [value, setValue] = useState(0);
  
    const handlePlus = () => {
      setValue(value + 1)
    }

    const handleMinus = () => {
      setValue(value - 1)
    }

    const chageNameHandler = () => {
      setChangeName('Air Jordan')
    }

    const changeDiscount = () => {
      setIsDiscount('yes')
      return alert('Press OK to see Discount ')
    }

    const handleAddCart = (e) => {
      setCart(cart + 1)
      return alert(('Add Item ' + e + ' Success'));
    }

    const Header = () => {
      return(
        <div className="header">
          <div className="troley"><br />
              <div className="count">{cart}</div>
          </div>
        </div>
      )
    }

    const Footer = () => {
      return(
        <div className="header">
        </div>
      )
    }

    const Image = () => {
      return (
        <div className="Image">
          <img src="sample.jpg" />
        </div>
      );
    }

    const ProdukInfo = props => {
      const {category, name, isDiscount} = props ;
      const benefit = ["New Space", "Best Quality", "Exclusive"];
      const listBenefit = benefit.map((itemBenefit) =>
        <li key={itemBenefit}> { itemBenefit } </li>
      );

      return (
        <div>
          <div className="Deskripsi">
            <b className="Cate">{category}</b>
              <h1 className="Title">{name} <button onClick={chageNameHandler} className="btn-name">Change Name</button></h1> 
                <p className="Price">IDR 7.399.999</p>
                {isDiscount == 'yes' &&
                  <b style={{color: 'teal'}}>Congrats Discount added</b>
                }
                <CheckDiscount isDiscount={isDiscount} discount={40} />
                <p className="Info">One of the most best shoes in the AJ 
                Collection, Black sneakers have earned their own aesthetic ranking in the modern male wardrobe. As a staple footwear piece they can be paired with various popular looks ranging from classic denim to luxe streetwear to leather jackets.</p>
              <ul>
                { listBenefit }
              </ul>
            <div className="counter">
              <button onClick={(e) => handleAddCart(name, e)}  className="btn">Add to Cart</button>
              <button className="minus" onClick={handlePlus}>+</button>
                <input type="text" value={value} />
              <button className="plus" onClick={handleMinus}>-</button>
            </div>
          </div>
        </div>
      );
    }

    const CheckDiscount = props => {
      const { isDiscount, discount } = props;
  
      if(isDiscount == "yes"){
        return(
          <p>Discount <b>{discount}%</b> off</p>
        );
      }
      else if(isDiscount == "coming"){
        return(
          <p>Discount <button onClick={changeDiscount} className="btn-discount">See Discount</button>
          </p>
        );
      }
      else {
        return(
          <p>Not Discount</p>
        );
      }

    }
    
    return (
      <div>
        <Header />
        <div className="ParentBox">
          <Image />
          <ProdukInfo category="Sneakers" name={changeName} isDiscount={isDiscount} />
          <ReviewItems />
        </div>
        <Footer />
      </div>
    );
  }

export default App;
