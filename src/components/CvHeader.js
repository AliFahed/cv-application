import React from 'react';
import '../styles/_cvHeader.scss';

function CvHeader(props) {
  // only show the edit button on hovering over the cv header container

  // update cv header details from default
  const [cvName, setCvName] = React.useState(props.name);
  const [cvSummary, setCvSummary] = React.useState(props.summary);

  function showHeaderForm() {
    const headerFromContainer = document.querySelector(
      '.header-form-container'
    );
    headerFromContainer.classList.add('show-header-form');
    headerFromContainer.classList.remove('hide-header-from');

    submitHeaderFrom();
  }

  function submitHeaderFrom() {
    const from = document.querySelector('form');
    from.addEventListener('submit', (e) => {
      e.preventDefault();

      editHeaderDetails();
    });
  }

  function editHeaderDetails() {
    const fullName = document.getElementById('fullName');
    setCvName(fullName.value);

    const summary = document.getElementById('summary');
    setCvSummary(summary.value);
  }

  function hideHeaderForm() {
    const headerFromContainer = document.querySelector(
      '.header-form-container'
    );
    headerFromContainer.classList.add('hide-header-from');
    headerFromContainer.classList.remove('show-header-from');
  }

  return (
    <div>
      <div className="btn-container">
        <button className="edit-cv-header-btn" onClick={showHeaderForm}>
          Edit
        </button>
      </div>

      <div className="header-form-container">
        <form action="#" className="form">
          <div className="input-wrapper">
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="cv-full-name"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="summary" className="label">
              Summary
            </label>
            <textarea
              name="summary"
              id="summary"
              cols="45"
              rows="10"
              className="cv-summary"
              placeholder="Write a Summary"
              required
            ></textarea>
          </div>

          <div className="button-container">
            <button
              type="button"
              className="close-btn"
              onClick={hideHeaderForm}
            >
              Close
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

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
          <div className="cv-name">{cvName}</div>
          <div className="cv-summary">{cvSummary}</div>
        </div>
      </div>
    </div>
  );
}

export default CvHeader;
