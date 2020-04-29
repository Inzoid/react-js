import React from 'react';
import './App.css';

function Review() {
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

export default Review;