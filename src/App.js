import React from 'react';
import './App.css';

  function App() {
    return (
      <div>
        <Header />
        <div className="ParentBox">
          <Image />
          <ProdukInfo ca tegory="Sneakers" name="Black Swagg" isDiscount="yes" />
          <ReviewItems />
  
          <Image />
          <ProdukInfo category="Sport" name="White Sneakers" isDiscount="coming" />
          <ReviewItems />
        </div>
      </div>
    );
  }

  function ReviewItems() {
    const users = [
      {
        "id": 2,
        "img" : "https://pbs.twimg.com/profile_images/1254533813482348544/QH_joMdY_400x400.jpg",
        "name": "Azizi",
        "review": "Keren sepatunya kualitas top barangnya exclusive banget nih"
      },
      {
        "id": 5,
        "img": "https://pbs.twimg.com/media/EUNi8uQUYAUiaXH?format=jpg&name=small",
        "name": "Asadel",
        "review": "Nice shoes, Thanks seller"
      },
      {
        "id": 1,
        "img" : "https://pbs.twimg.com/profile_images/1245363983667703808/bxpJy8Mv_400x400.jpg",
        "name": "Richard",
        "review": "Bahan bagus pas dikaki"
      },
      {
        "id": 4,
        "img": "https://pbs.twimg.com/profile_images/1247525729237004299/0-bzMriP_400x400.jpg",
        "name": "Fidly",
        "review": "Nice Component, Thanks seller"
      },
      {
        "id": 3,
        "img": "https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/11-mid-length-layered-blonde-haircut.jpg?zoom=2.625&w=500&ssl=1",
        "name": "Martha",
        "review": "Thanks for the products its amazing"
      },
    ];
    const listReview = users.map((itemReview) =>
      <div className="Item">
        <img src={itemReview.img} />
          <div className="User">
            <h3>{ itemReview.name }</h3>
            <p>{ itemReview.review } </p>
          </div>
        <hr />
      </div>
    );

    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
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
    const { isDiscount } = props;

    if(isDiscount == "yes"){
      return(
        <p>Discount 50 % off</p>
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
      <li> { itemBenefit } </li>
    );

    return (
      <div>
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
            <h1 className="Title">{name}</h1>
              <p className="Price">IDR 7.399.999</p>
                <CheckDiscount isDiscount={isDiscount} />
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
