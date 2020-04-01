import React, { Component } from 'react';
import '../../../styles/home.css';

class Home extends Component {
  constructor(props){
    super();
  }

  render() {
   const { children, ...attributes } = this.props;
   return (
     <div className="home-container">
        <div className="hero-container">
            <div className="hero-content" >
                <div className="hero-title">Save 10%</div>
                <div className="hero-subtitle">Ipsum delicata sed ex</div>
                <div className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="image-container" ><div className="hero-image" /></div>
        </div>
        <div className="empty-container"></div>
        <div className="box-container">
            <div className="box type1"><span className="box-text">#35D3B4</span></div>
            <div className="box type2"><span className="box-text">#1B2191</span></div>
            <div className="box type3"><span className="box-text">#D822EE</span></div>
        </div>
     </div>
   )
 };
}

export default Home;
