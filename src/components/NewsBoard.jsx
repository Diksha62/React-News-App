// import React, { useEffect, useState } from 'react';
// import NewsItem from "./NewsItem";
// const NewsBoard = ({category}) => {
//     const [articles, setArticles] = useState([]);
//     useEffect(() => {
//         let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         fetch(url).then(response=> response.json()).then(data =>setArticles(data.articles));
//     },[])
//   return (
//     <div>
//       <h2 className="text-center">Latest <span className='badge bg-danger'>News</span></h2>
//       {articles.map((news,index)=>{
//         return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
//       })}
//     </div>
//   );
// }

// export default NewsBoard;

// ---------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import NewsItem from "./NewsItem";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setArticles(data.articles));
//   }, [category]);

//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Latest <span className='badge bg-danger'>News</span></h2>
//       <div className="row">
//         {articles.map((news, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <NewsItem
//               title={news.title}
//               description={news.description}
//               src={news.urlToImage}
//               url={news.url}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewsBoard;


//----------------------------------------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import NewsItem from "./NewsItem";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         console.error('Error fetching articles:', error);
//       }
//     };

//     fetchArticles();
//   }, [category]);

//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Latest <span className='badge bg-danger'>News</span></h2>
//       <div className="row">
//         {articles.map((news, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <NewsItem
//               title={news.title}
//               description={news.description}
//               src={news.urlToImage}
//               url={news.url}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewsBoard;

import React, { useEffect, useState } from 'react';
import NewsItem from "./NewsItem";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Latest <span className='badge bg-danger'>News</span></h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;
