
// const NewsItem = ({title, description, src, url}) => {
//   return (
//     <div className="card bg-dark text-light mb-3 dinline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
//     <img src={src} style={{height: "200px", width:"360px"}} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">{title.slice(0,50)}</h5>
//       <p className="card-text">{description ? description.slice(0, 90) : "Explore the latest advancements in artificial intelligence and its impact on industries worldwide."}</p>
// <a href={url} className="btn btn-primary">Read More</a>

//     </div>
//   </div>
//   );
// }

// export default NewsItem;
import image from '../assets/news.jpg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card">
      {src && <img src={src ? src:image} className="card-img-top" alt="News" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;

