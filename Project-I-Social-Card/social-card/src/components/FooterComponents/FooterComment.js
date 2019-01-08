import React from 'react';
import './Footer.css';

const FooterComment = props => {
    return (
        <div className='comment-list'>
            {props.commentList.map( comment => {
                return (
                    <div key={comment.id} className='comment-item'>
                        {comment.author}
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default FooterComment;