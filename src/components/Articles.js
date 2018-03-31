import React, { Component } from 'react';
import Api from '../utils/Api';

const MAX_DESCRIPTION_LENGTH = 120;
const GET_NR_ARTICLES = 5;

// only top 5 or 6 most read articles from medium
class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    Api.getProfileInfo().then(({ data }) => {
      if (data.status === "ok") {
        const { items } = data;
        const filteredArticles = items.filter(({ categories }) => (categories.length > 0));

        let articles = filteredArticles.map(({ description, ...remainingProps }) => {
          let shortDescription = description.replace(/<\/?[^>]+(>|$)/g, "");

          shortDescription = shortDescription.substr(0, MAX_DESCRIPTION_LENGTH);
          shortDescription += "...";

          return {
            description: shortDescription,
            ...remainingProps,
          };
        });
        this.setState({ articles: articles.slice(0, GET_NR_ARTICLES - 1) });
      }
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="container p-0 mt-4">
        <h2 className="article-section-title">Latest articles</h2>
        {articles.map(({ title, description, link, thumbnail }, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-sm-12 article-img col-md">
              <a href={link}><img src={thumbnail} className="article-img" /></a>
            </div>
            <div className="col-sm-12 col-md ml-md-3">
              <a href={link}>
                <h4>{title}</h4>
              </a>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;