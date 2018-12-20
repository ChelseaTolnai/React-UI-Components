import React from 'react';
import './Header.css';

const moment = moment().format();

const HeaderTitle = () => {
    return (
        <div className="HeaderTitle">
            <h1>Lambda School</h1>
            <h3>@LambdaSchool</h3>
            <h3>•</h3>
            <h3>{moment}</h3>
        </div>
    );
};
  
export default HeaderTitle;