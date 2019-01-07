import React from 'react';
import './Footer.css';

const FooterCommentForm = (props) => {
    return (
        <div className='comment-form'>
            <div className='input-field'>
                <textarea 
                    rows='5' cols='80'
                    onChange={props.updateCommentList} 
                    onKeyDown={props.updateAddComment} 
                    value={props.inputValue}
                    placeholder='...add comment'
                    type='text'
                >
                </textarea>
            </div>
            <div className='btn-field'>
                <button onClick={props.updateAddComment}>Submit</button>
            </div>
        </div>
    );
};

export default FooterCommentForm;