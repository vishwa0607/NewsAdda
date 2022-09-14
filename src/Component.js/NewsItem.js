import React, { Component } from 'react'

export default class NewsItem extends Component {
  render(
    
  ) {
    let {title, description,imgUrl, newsUrl,date,author, source}= this.props
    return (
      <div className="my-3">
              <div className={`card bg-${this.props.mode==='dark'?'dark':'light'} text-${this.props.mode==='light'?'dark':'light'}`}>
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'88%',zIndex:'1'}}>
              {source}
              </span>
                <img src={imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title}... </h5>
                  <p className="card-text">{description}...</p>
                  <p className="card-text"><small className="text-muted"></small>By {author===null? 'Unknown': author} on {new Date(date).toGMTString()}</p>
                  <a href={newsUrl} target="_blank"  rel="noopener noreferrer" className="btn btn-sm  btn-info ">Read more</a>
                </div>
              </div>
      </div>
    )
  }
}
