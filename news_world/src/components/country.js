import { useEffect, useState } from "react";
import Items from "./items";

export default function Country({ name })
{
    const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${name}&apiKey=d2f0916290e74a92aa861efce0d57ef7`);
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