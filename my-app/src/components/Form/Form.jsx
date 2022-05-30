import React, { Component } from "react";
import css from './Form.module.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topic: 'react',
    };
  };

  onInputChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  textareaChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  selectChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  onSubmit = (event) => {
    alert(`{${this.state.username}, ${this.state.comment}, ${this.state.topic}} this data has been sent. Слава Україні!)`);
    event.preventDefault();
  };

  render() {
    const {username, comment, topic} = this.state;

    return (
      <div className={css.mainDiv}>
        <h2>Form Component</h2>


        <form onSubmit={this.onSubmit}>
          <div className={css.formContent}>
            <div className={css.formElement}>
              <label htmlFor="">Username</label>
              <input
                type="text"
                value ={username}
                onChange={this.onInputChange}
              />
            </div>

            <div className={`${css.formElement} ${css.textArea}`}>
              <label htmlFor="">Comments Area</label>

              <textarea
                value={comment}
                onChange={this.textareaChange}
              ></textarea>
            </div>

            <div className={css.formElement}>
              <label htmlFor="">Select Topic</label>

              <select
                value={topic}
                onChange={this.selectChange}
              >
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
              </select>
            </div>

            <div className={css.formElement}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
};

export default Form;
