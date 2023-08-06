import { useEffect, useState } from "react";
import Items from "./items";

const config = require('./config');

export default function Country({ name })
{
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${name}&apiKey=${config.NEWS_API_KEY}`);
        const data = await response.json();
        console.log(data);
        if (data.articles && data.articles.length > 0) {
          const newArticles = data.articles.map(source => ({
            description: source.description || 'Null',
            heading: source.title || 'Null',
            image: source.urlToImage || 'Null',
            url: source.url || 'Null',
          }));
          setArticles(newArticles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    fetchData();
  });

  return (
    <>
      <Items articles={articles} />
    </>
  );
}