import React, { Component } from 'react';
import Api from '../utils/Api';

// only top 5 or 6 most read articles from medium
class Articles extends Component {
  componentDidMount() {
    Api.getProfileInfo().then((data) => {
      console.log(data);
    });
  }
  render(){
    return (
      <ul>
        <li>
          <title>First article</title>
          <p>Some content</p>
        </li>
        <li>
          <title>Second article</title>
          <p>Some content</p>
        </li>
        <li>
          <title>Third article</title>
          <p>Some content</p>
        </li>
      </ul>
    );
  }
}

export default Articles;