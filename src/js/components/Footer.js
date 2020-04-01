import React, { Component } from 'react';
import '../../styles/footer.css';

class Footer extends Component {
  constructor(props){
    super();
  }

  render() {
   const { children, ...attributes } = this.props;
   return (
     <div className="app-footer">
        <div className="links-container">
            <div className="left-links">
                <h2 className="link-header">Left Footer Links</h2>
                <p className="link">Left Footer Link ONE</p>
                <p className="link">Left Footer Link TWO</p>
            </div>
            <div className="right-links">
                <h2 className="link-header">Left Footer Links</h2>
                <p className="link">Left Footer Link ONE</p>
                <p className="link">Left Footer Link TWO</p>
            </div>
        </div>
     </div>
   )
 };
}

export default Footer;
