import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'us',
        category: 'general',
        pageSize: 20
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }
   
    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    async componentDidMount(){
        this.props.setProgress(10);
       
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        this.props.setProgress(50);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false
        })
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults, 
            page: this.state.page+1,
            loading: false
        })
    };

  render() {
    return (
      <div className="container my-3">
        <h1 className={`text-center text-${this.props.mode==='light'?'dark':'light'}`} style={{margin: '30px 0px', marginTop: '90px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Loading/>}
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={!this.state.loading && <Loading />}
        >
            <div className="container">
                <div className="row">
                    {this.state.articles.filter(article => !article.content || !article.content.includes("[Removed]")).map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} mode={this.props.mode} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
      </div>
    )
  }
}
