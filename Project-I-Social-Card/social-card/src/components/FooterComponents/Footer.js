import React from 'react';
import './Footer.css';
import FooterComment from './FooterComment'
import FooterCommentForm from './FooterCommentForm'
import HeaderTitle from '../HeaderComponents/HeaderTitle'

const commentArray = [];

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentOff: true,
      isShareOff: true,
      isLikeOff: true,
      comments: commentArray,
      commentText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleClickComment = this.handleClickComment.bind(this);
    this.handleClickShare = this.handleClickShare.bind(this);
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleChange(e) {
    this.setState({commentText: e.target.value});
  }

  handleAddComment(e) {
    if (this.state.commentText === ''){return}

    if (e.type === 'keydown') {
      if(e.key !== 'Enter') {return} 
    }
    
    this.state.comments.push(
      {
        author: <HeaderTitle />,
        comment: this.state.commentText,
        id: Date.now(),
      }
    )
    this.setState({comments: this.state.comments, commentText: ''});
  }

  handleClickComment() {
    this.setState(state => ({
      isCommentOff: !state.isCommentOff 
    }));
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
            <p>{this.state.comments.length}</p>
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
        <div className={`comment-container ${this.state.isCommentOff ? 'hide' : null}`}>
          <FooterComment 
            commentList={this.state.comments}
          />
          <FooterCommentForm 
            inputValue={this.state.commentText}
            updateCommentList={this.handleChange}
            updateAddComment={this.handleAddComment}
          />
        </div>
      </div>
    );
  }
};
  
export default Footer;