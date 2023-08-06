import './items.css';

export default function Items({articles}){
    
  const groupArticlesIntoSetsOfThree = (articles) => {
    const groupedArticles = [];
    for (let i = 0; i < articles.length; i += 3) {
      groupedArticles.push(articles.slice(i, i + 3));
    }
    return groupedArticles;
  };
  const sortArticlesByImageAvailability = (articles) => {
    const articlesWithImages = articles.filter(article => article.image !== 'Null');
    const articlesWithoutImages = articles.filter(article => article.image === 'Null');
    return [...articlesWithImages, ...articlesWithoutImages];
  };

    return (
        <div className='page'>
        {articles.length > 0 ? (
            <ul>
              {groupArticlesIntoSetsOfThree(sortArticlesByImageAvailability(articles)).map((articleSet, setIndex) => (
                <div key={setIndex} className='container'>
                  {articleSet.map((article, index) => (
                    <div key={index} className='News'>
                      <a href='#' onClick={()=> {window.open(article.url, '_blank'); return false;}}>
                      <div className='image'>
                        {article.image !== 'Null' && <img src={article.image} alt={article.heading} />}
                      </div>
                      <div className='text'>
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
            <p><br></br><br></br>No articles available</p>
          )}
        </div>
    )
}
