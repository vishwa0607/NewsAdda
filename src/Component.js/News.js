import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps ={
    category:'general',
    pageSize:8,
    country:'in'
  }
  
  static propTypes ={
    category:PropTypes.string,
    pageSize:PropTypes.number,
    country:PropTypes.string,
  }
  
   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    this.state={
    articles: [],
    loading: false,
    page:1,
    totalResults:0
    
   
    }
  }
  
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73088f534be84027989d5cfbd70e9232&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data= await fetch(url);
    let parsedData= await data.json()
  
    this.setState({
      articles:parsedData.articles, totalResults:parsedData.totalResults,
      loading:false
    })
    
  }
  // HandleNext= async()=>{
  //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73088f534be84027989d5cfbd70e9232&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading:true})
  //     let data= await fetch(url);
  //     let parsedData= await data.json()
     
  //     this.setState({
  //     page:this.state.page+1,
  //     articles:parsedData.articles,
  //     loading:false
  //     })   
  //   }
    

  // }
  // HandlePrevious= async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73088f534be84027989d5cfbd70e9232&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data= await fetch(url);
  //   let parsedData= await data.json()
    
  //   this.setState({articles:parsedData.articles,
  //   page:this.state.page-1,
  //   loading:false
  //   })


  // }
  fetchMoreData=async()=>{
      this.setState({page:this.state.page + 1, })
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73088f534be84027989d5cfbd70e9232&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      
      let data= await fetch(url);
      let parsedData= await data.json()
    
      this.setState({
        articles:this.state.articles.concat(parsedData.articles), 
        totalResults:parsedData.totalResults,
        loading:false,
       
      })


  };
  render() {
    return (
    <>
      <h2 className="text-center my-3 " >NewsAdda - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
     {this.state.loading && <Spinner/>}
     <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spinner/>}
            >
         <div className="container  ">
             <div className="row ">
              {this.state.articles.map((element)=>{
              return <div className="col-md-4  mb-3" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>

                    })}
                </div> 
        </div>    
      </InfiniteScroll>       
      
        {/* <div className="d-flex justify-content-around mb-3">
          <button disabled={this.state.page<=1} type="button" onClick={this.HandlePrevious} className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.HandleNext} className="btn btn-dark">Next &rarr;</button>
        </div> */}
      
      </>
    )
    
  }
}
