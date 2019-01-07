import React from 'react';
import './Footer.css';

// import HeaderTitle from '../HeaderComponents/HeaderTitle';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShareOff: true,
      isLikeOff: true,
    };
    this.handleClickShare = this.handleClickShare.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickComment() {
    alert("Comment ability coming soon.");
  }

  handleClickShare() {
    if (this.state.isShareOff) alert("You have added this article to your newsfeed.");
    if (!this.state.isShareOff) alert("You have removed this article from your newsfeed.");
    this.setState(state => ({
      isShareOff: !state.isShareOff 
    }));
  }

  handleClickLike() {
    this.setState(state => ({
      isLikeOff: !state.isLikeOff 
    }));
  }

  render() {
    return (
      <div className="Footer">
        <div className="icon-container">       
          <div className="comments">
            <i className="material-icons flip" onClick={this.handleClickComment}>chat_bubble_outline</i>
            <p> </p>
          </div>
          <div className="recycles">
            <div>
              {this.state.isShareOff ? 
              <i className="material-icons rotate-45" onClick={this.handleClickShare}>autorenew</i> : 
              <i className="material-icons" onClick={this.handleClickShare}>undo</i> }
            </div>
            <p>{this.state.isShareOff ? '6' : '7'}</p>
          </div>
          <div className="likes">
            <div>
              {this.state.isLikeOff ? 
              <i className="material-icons" onClick={this.handleClickLike}>favorite_border</i> : 
              <i className="material-icons" onClick={this.handleClickLike}>favorite</i> }
            </div>
            <p>{this.state.isLikeOff ? '4' : '5'}</p>
          </div>
          <div className="messages">
          <a href="mailto:contact@lambdaschool.com">
            <i className="material-icons" >mail_outline</i>
          </a>
        </div>
        </div> 
        <div className="comment-container hide">
          
        </div>
      </div>
    );
  }
};
  
export default Footer;