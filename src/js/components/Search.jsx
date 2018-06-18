import React from 'react';

import { Redirect } from 'react-router-dom';

import Error from './error';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      username: value
    });
  }

  render() {
    // This seems to be the recommended way:
    // Conditionally rendering a Redirect Component
    // based on state.
    if (this.props.showResult === true) {
      return <Redirect to="/result" />;
    }

    return (
      <div className="search">
        <p className="cta">What's your GitHub Username?</p>
        {this.props.error && <Error />}
        <form onSubmit={this.props.handleSubmit}>
          <input
            id="username"
            placeholder="GitHub Username"
            type="text"
            autoComplete="off"
            value={this.state.username}
            onChange={event => {
              this.handleChange(event.target.value);
              this.props.handleInputChange(event.target.value);
            }}
          />
          <button
            className="button"
            type="submit"
            disabled={!this.state.username}
          >
            go!
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
