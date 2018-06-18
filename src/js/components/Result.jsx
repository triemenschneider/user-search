import React from 'react';
import { Link } from 'react-router-dom';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="result">
        <div className="user_details">
          <p className="username">@{this.props.github_username}</p>
          <p className="userFullName">{this.props.github_name}</p>
          <p className="userLocation">{this.props.github_location}</p>
          <p className="userFollowers">
            {this.props.github_followers} people <span>following</span>
          </p>
          <p className="userFollowing">
            <span>following</span> {this.props.github_following} people
          </p>
          <p className="userRepos">{this.props.github_repos} public repos</p>
          <Link to={this.props.github_blog} className="userBlog">
            {this.props.github_blog}
          </Link>
        </div>
        <div className="user_image">
          <img src={this.props.github_avatarURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Result;
