import React from 'react';
import '../styles/_cvMainContent.scss';
import LocationIcon from '../images/location.svg';
import PhoneIcon from '../images/phone.svg';
import EmailIcon from '../images/email.svg';

function CvMainContent() {
  return (
    <div className="cv-main-content">
      <div className="contact-and-skills-container">
        <div className="contact-container">
          <div className="contact-header-text">Contact</div>

          <div className="contact-details-container">
            <div className="contact-details">
              <img src={LocationIcon} alt="Location Icon" className="icon" />
              <p>Malaysia, Kuala Lumpur</p>
            </div>

            <div className="contact-details">
              <img src={PhoneIcon} alt="Phone Icon" className="icon" />
              <p>123-456-7890</p>
            </div>

            <div className="contact-details">
              <img src={EmailIcon} alt="Email Icon" className="icon" />
              <p>alifahed67@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <div className="skills-header-text">Skills</div>

          <div className="skills-details">
            <ul className="skills-ul">
              <li>html</li>
              <li>html</li>
              <li>html</li>
              <li>html</li>
              <li>html</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cv-main-section-details">
        <div className="cv-main-section-header-text">Experience</div>

        <div className="cv-main-section-first-details">
          <p className="main-section-details-header">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            tempore laboriosam? Facilis quaerat tenetur accusamus impedit
            architecto, dignissimos eligendi soluta voluptatem voluptatibus.
            Numquam, deserunt excepturi. Rerum, consequatur minus iure,
            obcaecati nemo numquam deserunt velit, explicabo labore suscipit
            assumenda! Similique ducimus libero quibusdam vel explicabo odio
            dolor aliquid eos ullam distinctio!
          </p>
        </div>

        <div className="cv-main-section-second-details">
          <p className="main-section-details-header">Lorem ipsum dolor sit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            tempore laboriosam? Facilis quaerat tenetur accusamus impedit
            architecto, dignissimos eligendi soluta voluptatem voluptatibus.
            Numquam, deserunt excepturi. Rerum, consequatur minus iure,
            obcaecati nemo numquam deserunt velit, explicabo labore suscipit
            assumenda! Similique ducimus libero quibusdam vel explicabo odio
            dolor aliquid eos ullam distinctio!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CvMainContent;
