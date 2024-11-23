import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, date, author, source} = this.props;
    return (
      <div className="my-3" style={{position: "relative"}}>
        <span className="badge rounded-pill bg-danger" style={{ position: "absolute", top: "-10px", right: "-10px", zIndex: "1" }}>{source}</span>
        <div className="card" style={{height: "480px", padding:"0", overflow: "hidden", backgroundColor: this.props.mode === 'light' ? 'white' : '#042743', color: this.props.mode === 'light' ? 'black' : 'white', border: `1px solid ${this.props.mode === 'light' ? 'black' : 'white'}`}}>
            <img src={!imageUrl?"https://img.freepik.com/vecteurs-premium/breaking-news-background-business-technologie-modele-breaking-news-texte-bleu-fonce-terre_258787-4554.jpg":imageUrl} className="card-img-top" alt="..." style={{height: "200px", objectFit: "cover"}}/>
            <div className="card-body" style={{height: "280px", overflow: "hidden"}}>
                <h5 className="card-title" style={{height: "50px", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden"}}>{title}</h5>
                <p className="card-text" style={{height: "70px", textOverflow: "ellipsis", display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3,  overflow: "hidden"}}>{!description?"Find out more...":description}</p>
                <p className="card-text" style={{height: "50px"}}><small className="text-danger">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary" style={{position: "absolute", bottom: "10px"}}>Read More</a>
            </div>
        </div>
      </div>
    );
  }
}

 
