import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class  extends Component {
    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?category=business&apiKey=7509e9adbb80422096123ef9dacf1c48&page=1&pageSize=20"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePreviousClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=7509e9adbb80422096123ef9dacf1c48&page=${this.state.page-1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=7509e9adbb80422096123ef9dacf1c48&page=${this.state.page+1}&pageSize=20`
            let data = await fetch(url)
            let parsedData = await data.json()
            console.log(parsedData)
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.articles.filter(article => !article.content || !article.content.includes("[Removed]")).map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
