import React, { Component } from "react";
import Navbar from "./Component.js/Navbar";
import News from "./Component.js/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class NewsAdda extends Component {
 mode= 'light';
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
          <Navbar mode={this.mode} toggleMode={this.toggleMode}/>

          <Routes>
            <Route exct path="/" element={<News  key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exct path="/business"element={<News  key="business"  pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exct path="/entertainment"  element={<News  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exct path="/health"   element={<News  key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exct path="/science"  element={<News  key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exct path="/sports"element={<News  key="sports"  pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exct path="/technology" element={<News key="technology"  pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}