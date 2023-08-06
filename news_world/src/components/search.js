import React, { useEffect, useState } from 'react';
import Items from './items';

const config = require('./config');

export default function Search({ searchQuery }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {console.log(config.NEWS_API_KEY)
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${config.NEWS_API_KEY}`);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          const newArticles = data.articles.map(article => ({
            description: article.description || 'No description available',
            heading: article.title || 'No title available',
            image: article.urlToImage || null,
            url: article.url || null,
          }));

          setArticles(newArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  return (
    <Items articles={articles} />
  );
}
