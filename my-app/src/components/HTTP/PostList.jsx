import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: '',
    };
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>{
      console.log(response);
      this.setState({
        posts: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        errorMsg: 'Error retreiving data',
      });
    });
  };

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div>
        <h1>List of Posts</h1>

        {posts.map((post) => <div>{post.title}</div>)}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  };
};

export default PostList;

