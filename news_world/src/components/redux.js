import React, { useState, useEffect } from 'react';
import Items from './items';
const config = require('./config');

function News({ category }) {
  // State to hold the fetched articles
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the News API using the provided category and API key
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${config.NEWS_API_KEY}`);
        const data = await response.json();

        // If sources are present in the response, extract relevant information
        if (data.sources && data.sources.length > 0) {
          const newArticles = data.sources.map(source => ({
            description: source.description || 'Null',
            heading: source.name || 'Null',
            image: source.imageURL || 'Null',
            url: source.url || 'Null',
          }));

          // Update the state with the new articles
          setArticles(newArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    // Fetch data when the category changes
    fetchData();
  }, [category]);

  // Render the Items component with the fetched articles
  return (
    <>
      <Items articles={articles} />
    </>
  );
}

export default News;
