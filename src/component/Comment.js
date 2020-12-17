import React, { useState, useReducer } from 'react';
import '../App.css';
import Menu from './Menu';
import NewComment from './NewComment';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, newComment(action.payload.comment)];
    case 'toggle':
      return state;
  }
}

function newComment(comment) {
  return {
    id: Date.now(),
    comment: comment,
    complete: false,
  };
}

function Comment() {
  const [showComment, setShowComment] = useState(false);
  const [newComment, dispatch] = useReducer(reducer, []);
  const [comment, setComment] = useState('');

  const handleComment = (e) => {
    e.preventDefault();
    dispatch({ type: 'add', payload: { comment: comment } });
    setComment('');
  };

  return (
    <div className="Review-box">
      {newComment &&
        newComment.map((item) => {
          return <NewComment key={item.id} comment={item} />;
        })}
      <Menu>
        <button
          className="btn"
          style={{ background: '#3F51B5' }}
          onClick={() => setShowComment(true)}
        >
          Show Comment Box
        </button>
        {showComment && !comment && (
          <button
            className="btn"
            style={{ background: 'grey', pointer: 'cursor' }}
            onClick={() => setShowComment(false)}
          >
            Hide Comment Box
          </button>
        )}
      </Menu>
      {/* {showComment && !comment && ( */}
      <div className="User">
        <img
          style={{ marginTop: '16px' }}
          src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg"
        />
        <h3>Inzoid</h3>
        <input
          className="comment"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={handleComment}
          style={{ background: 'teal', marginLeft: '6px' }}
          className="btn"
        >
          Submit
        </button>
      </div>
      {/* )} */}
    </div>
  );
}

export default Comment;
