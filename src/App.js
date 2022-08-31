import React, { Component } from "react";
import Navbar from "./Component.js/Navbar";
import News from "./Component.js/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class NewsAdda extends Component {
 mode= 'light';
    apiKey='73088f534be84027989d5cfbd70e9232';
      pageSize=5;
  // background dark code....>
  toggleMode=()=>
  {
    if(this.mode==='light')
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
          <Navbar mode={this.mode} toggleMode={this.toggleMode}/>np

          <Routes>
            <Route exct path="/" element={<News  key="general"   apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exct path="/business"element={<News  key="business"    apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exct path="/entertainment"  element={<News  key="entertainment"   apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exct path="/health"   element={<News  key="health"   apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exct path="/science"  element={<News  key="science"   apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exct path="/sports"element={<News  key="sports"    apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exct path="/technology" element={<News key="technology"    apiKey={this.apiKey}  pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}