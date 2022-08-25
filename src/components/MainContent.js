import React from 'react';
import '../styles/_mainContent.scss';
import CvHeader from './CvHeader';
import CvMainContent from './CvMainContent';

function MainContent() {
  return (
    <main className="cv-container">
      <CvHeader />
      <CvMainContent />
    </main>
  );
}

export default MainContent;
