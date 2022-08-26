import React from 'react';
import '../styles/_mainContent.scss';
import CvHeader from './CvHeader';
import CvMainContent from './CvMainContent';

function MainContent() {
  return (
    <main className="cv-container">
      <CvHeader
        name="Ali Fahed"
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        voluptate quos, aliquid magni animi id dolorem quaerat aliquam saepe
        dignissimos nam deleniti eaque earum similique tempore ab. Distinctio,
        voluptates necessitatibus."
      />
      <CvMainContent />
    </main>
  );
}

export default MainContent;
