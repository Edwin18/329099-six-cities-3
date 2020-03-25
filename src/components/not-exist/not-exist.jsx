import React from 'react';
import {Link} from 'react-router-dom';

const NotExist = () => (
  <div className="not-exist">
    <p>Current offer doesn&#39;t exist</p>
    <Link className="not-exist__link" to={`/`}>&gt;Go to main page&lt;</Link>
  </div>
);

export default NotExist;
