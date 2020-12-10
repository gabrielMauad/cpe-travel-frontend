import React from 'react';
import SpecialInfo from '../SpecialInfoTitle';

import './BoxInfo.css';

function BoxInfo({ inf }) {
  return (
    <div className="englobaTudo">
      <div className="boxInfo">
        <SpecialInfo />
        <img src={inf.info} alt="info" className="infoImage" />
      </div>

    </div>
  );
}
export default BoxInfo;
