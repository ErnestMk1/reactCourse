import React, { useReducer, useEffect } from "react";
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case 'LOSE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  };
};

const TwoDataFetching = () => {
  const [newState, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => dispatch({type: 'SUCCESS', payload: response.data}))
      .catch(error => dispatch({type: 'LOSE', payload: error}))
  }, []);

  return (
    <div>
      {newState.loading ? 'Loading' : newState.post.title}
      {newState.error ? 'smth went wrong!' : null}
    </div>
  );
};

export default TwoDataFetching;
