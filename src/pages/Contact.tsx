import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="page-title">GET IN TOUCH</h1>
      </section>

      <section className="contact-section">
        <div className="content-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">BOOKING INFO</h2>
              <div className="info-block">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:grabtharshammernc@gmail.com" className="contact-link">
                    grabtharshammernc@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-block">
                <h3>📍 Based In</h3>
                <p>Charlotte, NC</p>
              </div>

              <div className="info-block">
                <h3>🎸 Available For</h3>
                <ul className="services-list">
                  <li>Bar & Club Gigs</li>
                  <li>Private Events</li>
                  <li>Festivals</li>
                  <li>Corporate Events</li>
                  <li>Weddings & Parties</li>
                </ul>
              </div>

              <div className="info-block">
                <h3>🌐 Connect With Us</h3>
                <div className="social-links-vertical">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61572077633076" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-item"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.youtube.com/@GrabtharsHammerBand" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-item"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2 className="section-title">SEND US A MESSAGE</h2>
              <a 
                href="mailto:grabtharshammernc@gmail.com?subject=Booking Inquiry&body=Hi Grabthar's Hammer,%0D%0A%0D%0AI'd like to inquire about booking you for:%0D%0A%0D%0AEvent Type:%0D%0ADate:%0D%0AVenue/Location:%0D%0AExpected Audience Size:%0D%0AAdditional Details:%0D%0A%0D%0AThanks!"
                className="email-button"
              >
                REQUEST BOOKING
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
