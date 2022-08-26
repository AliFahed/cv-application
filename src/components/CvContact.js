import React from 'react';
import LocationIcon from '../images/location.svg';
import PhoneIcon from '../images/phone.svg';
import EmailIcon from '../images/email.svg';

function CvContact(props) {
  // hide or show the contact form
  function showContactForm() {
    const contactFromContainer = document.querySelector(
      '.contact-form-container'
    );
    contactFromContainer.classList.add('show-contact-form-container');
    contactFromContainer.classList.remove('hide-contact-form-container');

    submitContactForm();
  }

  function hideContactForm() {
    const contactFromContainer = document.querySelector(
      '.contact-form-container'
    );
    contactFromContainer.classList.add('hide-contact-form-container');
    contactFromContainer.classList.remove('show-contact-form-container');
  }

  // update cv contact details from default
  const [cvAddress, setCvAddress] = React.useState(props.address);
  const [cvPhone, setCvPhone] = React.useState(props.phone);
  const [cvEmail, setCvEmail] = React.useState(props.email);

  function submitContactForm() {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      editContactDetails();
    });
  }

  function editContactDetails() {
    const address = document.getElementById('address');
    setCvAddress(address.value);

    const phone = document.getElementById('phone');
    setCvPhone(phone.value);

    const email = document.getElementById('email');
    setCvEmail(email.value);
  }

  return (
    <div>
      <div className="edit-contact-btn-container">
        <button className="edit-contact-btn" onClick={showContactForm}>
          Edit
        </button>
      </div>

      <div className="contact-form-container">
        <form action="#" className="contact-form">
          <div className="input-wrapper">
            <label htmlFor="address" className="label">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="address"
              placeholder="Address"
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone" className="label">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="phone"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="cv-contact-button-container">
            <button
              type="button"
              className="close-btn"
              onClick={hideContactForm}
            >
              Close
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="contact-container">
        <div className="contact-header-text">Contact</div>
        <div className="contact-details-container">
          <div className="contact-details">
            <img src={LocationIcon} alt="Location Icon" className="icon" />
            <p>{cvAddress}</p>
          </div>
          <div className="contact-details">
            <img src={PhoneIcon} alt="Phone Icon" className="icon" />
            <p>{cvPhone}</p>
          </div>
          <div className="contact-details">
            <img src={EmailIcon} alt="Email Icon" className="icon" />
            <p>{cvEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvContact;
