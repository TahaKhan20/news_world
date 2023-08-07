import React, { useEffect, useState } from 'react';
import Items from './items';

// Import the configuration from the config.js file
const config = require('./config');

export default function Search({ searchQuery }) {
  // State to hold the fetched articles
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Log the API key for debugging
        console.log(config.NEWS_API_KEY);

        // Fetch data from the News API using the search query and API key
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${config.NEWS_API_KEY}`);
        const data = await response.json();

        // If articles are present in the response, extract relevant information
        if (data.articles && data.articles.length > 0) {
          const newArticles = data.articles.map(article => ({
            description: article.description || 'No description available',
            heading: article.title || 'No title available',
            image: article.urlToImage || null,
            url: article.url || null,
          }));

          // Update the state with the new articles
          setArticles(newArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    // Fetch data only if a search query is provided
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  // Render the Items component with the fetched articles
  return (
    <Items articles={articles} />
  );
}
