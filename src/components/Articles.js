import React, { Component } from 'react';
import Api from '../utils/Api';
import GA_OBJECT from "../libs/GA";

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
          return {
            description: description.replace(/<\/?[^>]+(>|$)/g, ""),
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
            <div className="col-sm-12 article-img col-md mb-3 mb-md-0">
              <a href={link} onClick={() => {
                GA_OBJECT.event({
                  category: 'article',
                  action: `click article ${link}`
                });
              }}><img src={thumbnail} className="article-img" /></a>
            </div>
            <div className="col-sm-12 col-md ml-md-3 pr-4">
              <a href={link} onClick={() => {
                GA_OBJECT.event({
                  category: 'article',
                  action: 'click articles'
                });
              }}>
                <h4>{title}</h4>
              </a>
              <p className="block-with-text">{description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;