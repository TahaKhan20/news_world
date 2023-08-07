import './items.css';

export default function Items({ articles }) {
  // Group articles into sets of three
  const groupArticlesIntoSetsOfThree = (articles) => {
    const groupedArticles = [];
    for (let i = 0; i < articles.length; i += 3) {
      groupedArticles.push(articles.slice(i, i + 3));
    }
    return groupedArticles;
  };

  // Sort articles based on image availability
  const sortArticlesByImageAvailability = (articles) => {
    const articlesWithImages = articles.filter(article => article.image !== 'Null');
    const articlesWithoutImages = articles.filter(article => article.image === 'Null');
    return [...articlesWithImages, ...articlesWithoutImages];
  };

  return (
    <div className='page'>
      {articles.length > 0 ? (
        <ul>
          {/* Map over grouped and sorted articles */}
          {groupArticlesIntoSetsOfThree(sortArticlesByImageAvailability(articles)).map((articleSet, setIndex) => (
            <div key={setIndex} className='container'>
              {/* Map over individual articles within a set */}
              {articleSet.map((article, index) => (
                <div key={index} className='News'>
                  {/* Open article link in a new tab */}
                  <a href='#' onClick={() => { window.open(article.url, '_blank'); return false; }}>
                    <div className='image'>
                      {/* Display article image if available */}
                      {article.image !== 'Null' && <img src={article.image} alt={article.heading} />}
                    </div>
                    <div className='text'>
                      {/* Display article heading and description */}
                      {article.heading !== 'Null' && <h1>{article.heading}</h1>}
                      {article.description !== 'Null' && <p>{article.description}</p>}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </ul>
      ) : (
        // Display a message if no articles are available
        <p><br></br><br></br>No articles available</p>
      )}
    </div>
  );
}
