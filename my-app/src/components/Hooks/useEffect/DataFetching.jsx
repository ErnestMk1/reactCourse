import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => console.log(err));
  }, [idFromButton]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        type='button'
        onClick={() => setIdFromButton(id)}
      >Fetch Post</button>
      {post.title}
    </div>
  );
};

export default DataFetching;
