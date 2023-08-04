import './items.css';

export default function Items({articles}){
    
  const groupArticlesIntoSetsOfThree = (articles) => {
    const groupedArticles = [];
    for (let i = 0; i < articles.length; i += 3) {
      groupedArticles.push(articles.slice(i, i + 3));
    }
    return groupedArticles;
  };

    return (
        <>
        {articles.length > 0 ? (
            <ul>
              {groupArticlesIntoSetsOfThree(articles).map((articleSet, setIndex) => (
                <div key={setIndex} className='container'>
                  {articleSet.map((article, index) => (
                    <div key={index} className='News'>
                      <div className='image'>
                        {article.image !== 'Null' && <img src={article.image} alt={article.heading} />}
                      </div>
                      <div className='text'>
                        <h1>{article.heading}</h1>
                        <p>{article.description}</p>
                        <button onClick={() => window.open(article.url, '_blank')}>See More...</button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          ) : (
            <p>No articles available</p>
          )}
        </>
    )
}