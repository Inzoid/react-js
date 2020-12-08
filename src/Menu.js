import React, { useState, useEffect } from 'react';
import './App.css';

export default function Menu(props) {
  const [type, setType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then((response) => response.json())
    .then((json) => setItems(json))
  }, [type]);

  return (
    <div style={{marginTop: '6px'}}>
      <h2>Menu</h2>
      {props.children}
      <button className="btn" style={{backgroundColor: 'teal'}} onClick={() => setType('users')}>Users</button>
      <button className="btn" style={{backgroundColor: 'black'}} onClick={() => setType('comments')}>Comments</button>

      {items.slice(0, 3).map((item, idx) => 
        <div key={idx} className="name">
          <img  src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg" />
            {type == 'comments' ?
              <div className="User">
                <h3><b>{item.name}</b></h3>
                <p>{item.body}</p>
              </div> : 
              <div className="User">
                <h3><b>{item.name}</b></h3>
                <p>My Website : <b>{item.website}</b></p>
              </div>
            }
            <hr/>
        </div>
      )}
    </div>
  )
}