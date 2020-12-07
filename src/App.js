import React, { useState } from 'react';
import './App.css';
import ReviewItems from './Reviews';
import ProdukInfo from './Produk';
import Cart from './Cart';

  function App() {
    const [name, setName] = useState('Dior Limited')
    const [value, setValue] = useState(0);
    const [cart, setCart] = useState(0);

    const chageNameHandler = () => {
      let confirm = window.confirm('Are you sure to change name ?');
      if(confirm) {
        setName('Air Jordan');
      }
      return confirm;
    }

    const handleAddCart = (e) => {
      setCart(cart + 1)
      return alert(('Add Item ' + e + ' Success'));
    }

    const handlePlus = () => {
      setValue(value + 1)
    }

    const handleMinus = () => {
      setValue(value - 1)
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
    
    return (
      <div>
        <Header />
          <div className="ParentBox">
            <Image />
            <ProdukInfo category="Compass" name={name} isDiscount="coming" onChangeName={chageNameHandler} > 
              <Cart handleAddCart={handleAddCart} handlePlus={handlePlus} handleMinus={handleMinus} value={value} />
            </ProdukInfo>
            <ReviewItems />
          </div>
        <Footer />
      </div>
    );
  }

export default App;
