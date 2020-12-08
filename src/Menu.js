import React, { useState, useEffect } from 'react';
import './App.css';

export default function Api() {
  const [type, setType] = useState('comments');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then((response) => response.json())
    .then((json) => setItems(json))
  }, [type]);

  return (
    <div>
      <button className="btn" onClick={() => setType('users')}>Users</button>
      <button className="btn" onClick={() => setType('comments')}>Comments</button>

      {items.slice(0, 3).map((item) => 
        <div className="Item">
          <img style={{marginTop: '20px'}} src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg" />
            <div className="User">
              <h3><b>{item.title}</b></h3>
              <h3><b>{item.name}</b></h3>
              <h4><b>{item.email}</b></h4>
              <p>{item.body}</p>
            </div>
            <hr/>
        </div>
      )}
    </div>
  )
}