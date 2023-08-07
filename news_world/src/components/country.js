import { useEffect, useState } from "react";
import Items from "./items";

const config = require('./config');

export default function Country({ name }) {
  // State to hold the fetched articles
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch data from the News API using the provided country name and API key
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${name}&apiKey=${config.NEWS_API_KEY}`);
        const data = await response.json();

        // Log the fetched data for debugging
        console.log(data);

        // If articles are present in the response, extract relevant information
        if (data.articles && data.articles.length > 0) {
          const newArticles = data.articles.map(source => ({
            description: source.description || 'Null',
            heading: source.title || 'Null',
            image: source.urlToImage || 'Null',
            url: source.url || 'Null',
          }));
          
          // Update the state with the new articles
          setArticles(newArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    // Fetch data when the component mounts
    fetchData();
  }, [name]); // Dependency array ensures this effect runs when 'name' changes

  return (
    <>
      {/* Render the Items component with the fetched articles */}
      <Items articles={articles} />
    </>
  );
}
