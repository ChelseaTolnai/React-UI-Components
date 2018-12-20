import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
        <div className="HeaderContent">
            <HeaderTitle />
            <p>Let's learn React by building simple interfaces with components. <span className="space"> </span>Don't try to overthink it, just keep it simple and have fun. <span className="space"> </span>Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    );
};
  
export default HeaderContent;