import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="user id"
              value={userId}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              placeholder="body"
              value={body}
              onChange={this.onChangeHandler}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
};

export default PostForm;

