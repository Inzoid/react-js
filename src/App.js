import React, { useState, useReducer } from 'react';
import './App.css';
import ReviewItems from './component/Reviews';
import ProdukInfo from './component/Produk';
import Cart from './component/Cart';
import ACTION from '../src/store/actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [name, setName] = useState('Dior Limited');
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [cart, setCart] = useState(0);

  const chageNameHandler = () => {
    let confirm = window.confirm('Are you sure to change name ?');
    if (confirm) {
      setName('Air Jordan');
    }
    return confirm;
  };

  const handleAddCart = () => {
    setCart(cart + 1);
    return alert('Add Item ' + name + ' Success');
  };

  const handlePlus = () => {
    dispatch({ type: ACTION.INCREMENT });
  };

  const handleMinus = () => {
    dispatch({ type: ACTION.DECREMENT });
  };

  const Header = () => {
    return (
      <div className="header">
        <div className="troley">
          <br />
          <div className="count">{cart}</div>
        </div>
      </div>
    );
  };

  const Footer = () => {
    return <div className="header"></div>;
  };

  return (
    <div>
      <Header />
      <div className="ParentBox">
        <ProdukInfo
          category="Compass"
          name={name}
          isDiscount="coming"
          onChangeName={chageNameHandler}
        >
          <Cart
            handleAddCart={handleAddCart}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            value={state.count}
          />
        </ProdukInfo>
        <ReviewItems />
      </div>
      <Footer />
    </div>
  );
}

export default App;
