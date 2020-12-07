import React from 'react';
import './App.css';
import Comment from './Comment';

function Review() {
  const users = [
    {
      "id": 1,
      "img" : "https://pbs.twimg.com/profile_images/1333887836987084800/50QShEev_400x400.jpg",
      "name": "Sony",
      "review": "Keren top barangnya exclusive banget"
    },
    {
      "id": 2,
      "img": "https://pbs.twimg.com/media/EUNi8uQUYAUiaXH?format=jpg&name=small",
      "name": "Asadel",
      "review": "Thanks for the products its amazing"
    },
    {
      "id": 3,
      "img" : "https://pbs.twimg.com/profile_images/1328372081814237192/Ke5HWWxq_400x400.jpg",
      "name": "Ikhbal",
      "review": "Nice Website, Thanks Developer"
    },
    {
      "id": 4,
      "img": "https://pbs.twimg.com/profile_images/1285960737215700992/L7M735ww_400x400.jpg",
      "name": "Flacko",
      "review": "Nice Component, Thanks seller"
    },
  ];
  const listReview = users.map((itemReview) =>
    <div key={itemReview.id} className="Item">
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
      <Comment />
      <hr/>
    </div>
  );
}

export default Review;