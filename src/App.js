import React, { Component } from "react";
import Navbar from "./Component.js/Navbar";
import News from "./Component.js/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class NewsAdda extends Component {
  constructor(state){
    super(state);
    this.state={
   
      mode:'light'
   
    }
  
  }
    apiKey='73088f534be84027989d5cfbd70e9232';
      pageSize=5;
  // background dark code....>
   toggleMode=()=>
  {
    if(this.state.mode==='light')
    {
      this.setState({mode:'dark'})
      
    document.body.style.backgroundColor='#131e2e'
    
    }
    
    else
    {
      this.setState({mode:'light'})
  document.body.style.backgroundColor='white'
   
    }
  }
  // <----backgound mode
  render() {
    
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />

          <Routes>
            <Route exct path="/" element={<News  key="general"   mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exct path="/business"element={<News  key="business"    mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exct path="/entertainment"  element={<News  key="entertainment"   mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exct path="/health"   element={<News  key="health"   mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exct path="/science"  element={<News  key="science"   mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exct path="/sports"element={<News  key="sports"    mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exct path="/technology" element={<News key="technology"    mode={this.state.mode} apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}