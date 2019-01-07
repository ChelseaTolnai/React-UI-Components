import React from 'react';
import './Footer.css';

const FooterCommentForm = (props) => {
    return (
        <div className='comment-form'>
            <textarea 
                rows='5' cols='75'
                onChange={props.updateCommentList} 
                onKeyDown={props.updateAddComment} 
                value={props.inputValue}
                placeholder='...add comment'
                type='text'
            >
            </textarea>
            <button onClick={props.updateAddComment}>Submit</button>
        </div>
    );
};

export default FooterCommentForm;