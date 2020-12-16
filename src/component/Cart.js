import React from "react";

function Cart(props) {
  return (
    <div className="counter">
      <button
        onClick={(e) => props.handleAddCart(props.name, e)}
        className="btn"
      >
        Add to Cart
      </button>
      <button className="minus" onClick={props.handlePlus}>
        +
      </button>
      <input type="text" value={props.value} />
      <button className="plus" onClick={props.handleMinus}>
        -
      </button>
    </div>
  );
}

export default Cart;
