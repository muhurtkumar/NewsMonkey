import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ height: "400px", padding:"0", overflow: "hidden"}}>
            <img src={!imageUrl?"https://img.freepik.com/vecteurs-premium/breaking-news-background-business-technologie-modele-breaking-news-texte-bleu-fonce-terre_258787-4554.jpg":imageUrl} className="card-img-top" alt="..." style={{height: "200px", objectFit: "cover"}}/>
            <div className="card-body" style={{height: "200px", overflow: "hidden"}}>
                <h5 className="card-title" style={{height: "50px", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden"}}>{title}</h5>
                <p className="card-text" style={{height: "80px", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3,  overflow: "hidden"}}>{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary" style={{position: "absolute", bottom: "10px"}}>Read More</a>
            </div>
        </div>
      </div>
    );
  }
}

 