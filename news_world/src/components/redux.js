import React, { useState, useEffect } from 'react';
import Items from './items';

function News({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=d2f0916290e74a92aa861efce0d57ef7`);
        const data = await response.json();

        if (data.sources && data.sources.length > 0) {
          const newArticles = data.sources.map(source => ({
            description: source.description || 'Null',
            heading: source.name || 'Null',
            image: source.imageURL || 'Null',
            url: source.url || 'Null',
          }));
          setArticles(newArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchData();
  }, [category]);

  return (
    <>
      <Items articles={articles} />
    </>
  );
}

export default News;
