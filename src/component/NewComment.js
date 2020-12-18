import React from 'react';
import '../App.css';

export default function NewComment({ name, comment }) {
  return (
    <div>
      <div className="Item">
        <img src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg" />
        <div className="User">
          <h3>{name.name}</h3>
          <p>{comment.comment}</p>
        </div>
        <hr />
      </div>
    </div>
  );
}
