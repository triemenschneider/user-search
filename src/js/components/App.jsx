import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './Header';
import Search from './Search';
import Result from './Result';
import Spinner from './Spinner';

import { getUserinfo } from '../utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username_input: '',
      github_username: '',
      github_avatarURL: '',
      github_name: '',
      github_location: '',
      github_followers: '',
      github_following: '',
      github_repos: '',
      github_blog: '',

      error: false,
      showResult: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkForError = this.checkForError.bind(this);
    this.unRedirect = this.unRedirect.bind(this);
  }

  // Used by the header onClick to set showResult to false,
  // to be able to navigate to / again.
  unRedirect() {
    this.setState({
      showResult: false
    });
  }

  handleInputChange(value) {
    this.setState(
      {
        username_input: value
      },
      () => {
        console.log(this.state.username_input);
      }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    getUserinfo(this.state.username_input).then(response => {
      this.setState(
        {
          github_username: response.github_login,
          github_avatarURL: response.avatarURL,
          github_name: response.github_name,
          github_location: response.github_location,
          github_followers: response.github_followers,
          github_following: response.github_following,
          github_repos: response.github_repos,
          github_blog: response.github_blog
        },
        // Called as a callback of the asyncronous setState
        // to make sure that the check really happens only
        // after the state has been updated.
        //this.checkForError
        () => {
          console.log(this.state);
          this.checkForError();
        }
      );
    });
  }

  checkForError() {
    // At some point in time I should try to write this
    // using a ternary.
    if (!this.state.github_name) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        error: false,
        showResult: true
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header unRedirect={this.unRedirect} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Search
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                showResult={this.state.showResult}
                error={this.state.error}
              />
            )}
          />
          <Route
            path="/result"
            render={() => (
              <Result
                github_username={this.state.github_username}
                github_name={this.state.github_name}
                github_location={this.state.github_location}
                github_followers={this.state.github_followers}
                github_following={this.state.github_following}
                github_repos={this.state.github_repos}
                github_blog={this.state.github_blog}
                github_avatarURL={this.state.github_avatarURL}
              />
            )}
          />
          <Route path="/spinner" component={Spinner} />
        </Switch>
      </div>
    );
  }
}

export default App;
