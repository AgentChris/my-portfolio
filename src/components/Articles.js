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


        // TODO: these items should be removed
        articles = articles.filter(({ guid }) => (guid !== "https://medium.com/p/7df9927422ef" && guid !== "https://medium.com/p/2752591fd32d"));

        this.setState({ articles: articles.slice(0, GET_NR_ARTICLES - 1) });
      }
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(({ title, description }) => (
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;