import React from 'react';
import './Footer.css';

const FooterComment = props => {
    return (
        <div className='comment-list'>
            {props.commentList.map( comment => {
                return (
                    <div key={comment.id}>
                        {comment.author}
                        {comment.comment}
                    </div>
                )
            })}
        </div>
    );
};

export default FooterComment;