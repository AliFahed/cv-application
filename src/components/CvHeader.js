import React from 'react';
import '../styles/_cvHeader.scss';

function CvHeader() {
  return (
    <div className="cv-header-container">
      {/* <div className="cv-photo-container">
        <input
          type="file"
          className="upload-btn"
          accept="image/png, image/jpg"
        />
        <img src="" alt="CV photo" className="cv-photo" />
      </div> */}

      <div className="cv-header-text-container">
        <div className="cv-name">Ali Fahed</div>
        <div className="cv-summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptate quos, aliquid magni animi id dolorem quaerat aliquam saepe
          dignissimos nam deleniti eaque earum similique tempore ab. Distinctio,
          voluptates necessitatibus.
        </div>
      </div>
    </div>
  );
}

export default CvHeader;
