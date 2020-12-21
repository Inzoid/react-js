import React, { useState, useReducer } from 'react';
import '../App.css';
import Menu from './Menu';
import NewComment from './NewComment';
import ACTION from '../store/actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case ACTION.ADD_COMMENT:
      return [
        ...state,
        newComment(action.payload.name, action.payload.comment),
      ];
    case ACTION.TOGGLE_COMMENT:
      return state;
  }
}

function newComment(name, comment) {
  return {
    id: Date.now(),
    name: name,
    comment: comment,
    complete: false,
  };
}

function Comment() {
  const [name, setName] = useState('Your Name');
  const [showComment, setShowComment] = useState(true);
  const [newComment, dispatch] = useReducer(reducer, []);
  const [comment, setComment] = useState('');

  const handleComment = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTION.ADD_COMMENT,
      payload: {
        name: name,
        comment: comment,
      },
    });
    setName('');
    setComment('');
  };

  return (
    <div className="Review-box">
      {newComment &&
        newComment.map((item) => {
          return <NewComment key={item.id} name={item} comment={item} />;
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
      {showComment && (
        <form onSubmit={handleComment}>
          <div className="User">
            <img
              style={{ marginTop: '16px' }}
              src="https://pbs.twimg.com/profile_images/1333422513318100994/lrNmElhn_400x400.jpg"
            />
            <h3>
              <input
                className="comment"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '200px', height: '20px' }}
              />
            </h3>
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
        </form>
      )}
    </div>
  );
}

export default Comment;
