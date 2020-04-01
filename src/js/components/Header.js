import React, { Component } from 'react';
import '../../styles/header.css';
import search from '../../assets/icons/search_icon.svg';

class Header extends Component {
  constructor(props){
    super();
  }

  render() {
   const { children, ...attributes } = this.props;
   return (
     <div>
        <div className="app-header">
            <div className="logo" />
            <div className="search-container">
              <div className="search">
                  <img className="search-icon" src={search}/>
              </div>
            </div>
        </div>
        <div className="app-nav"></div>
     </div>
   )
 };
}

export default Header;
