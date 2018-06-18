import axios from 'Axios';

let getUserinfo = username => {
  return axios
    .get('https://api.github.com/users/' + username)
    .then(response => {
      return {
        avatarURL: response.data.avatar_url,
        github_login: response.data.login,
        github_name: response.data.name,
        github_location: response.data.location,
        github_followers: response.data.followers,
        github_following: response.data.following,
        github_repos: response.data.public_repos,
        github_blog: response.data.blog
      };
    });
};

export { getUserinfo };
