import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="HeaderTitle">
            <h1>Lambda School</h1>
            <h3>@LambdaSchool</h3>
            <h3>&bull;</h3>
            <h3>{moment().format("D MMM").toLowerCase()}</h3>
        </div>
    );
};
  
export default HeaderTitle;