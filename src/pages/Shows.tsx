import { Link } from 'react-router-dom';
import './Shows.css';

const Shows = () => {
  return (
    <div className="shows-page">
      <section className="shows-hero">
        <h1 className="page-title">LIVE SHOWS</h1>
      </section>

      <section className="shows-section">
        <div className="content-container">
          <div className="facebook-cta">
            <a
              href="https://www.facebook.com/profile.php?id=61572077633076&sk=events"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-button"
            >
              VIEW SHOWS ON FACEBOOK
            </a>
          </div>

          <div className="booking-cta">
            <h3>Want us at your venue?</h3>
            <Link to="/contact" className="book-button">BOOK US</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shows;
