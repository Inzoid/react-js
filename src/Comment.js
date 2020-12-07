import React, { useState } from 'react';
import './App.css';

function Comment() {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState('');

  const handleComment = () => {
    setComment('This is New comments')
  }

  return(
    <div className="Review-box">
      {comment && 
        <div className="Item">
        <img src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg" />
          <div className="User">
            <h3>Inzoid</h3>
            <p>{comment}</p>
          </div>
        <hr />
      </div>
      }
      <button className="btn" style={{background: '#3F51B5'}} onClick={() => setShowComment(true)}>Show Comment Box</button>
      {showComment && !comment &&
        <button className="btn" style={{background: 'grey' , pointer: 'cursor'}} onClick={() => setShowComment(false)}>Hide Comment Box</button>
      }
      {showComment && !comment &&
        <div className="User">
        <img style={{marginTop: '16px'}} src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg" />
          <h3>Inzoid</h3>
          <input className="comment" type="text" />
          <button onClick={handleComment} style={{background: 'teal', marginLeft: '6px'}} className="btn">Submit</button>
        </div>
      }
    </div>
  );
}

export default Comment;