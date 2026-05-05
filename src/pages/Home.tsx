import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <img src="/GH-primary-FC.png" alt="Grabthar's Hammer" className="hero-logo" />
          <div className="cta-buttons">
            <a
              href="https://www.youtube.com/@GrabtharsHammerBand"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-youtube"
            >
              HEAR US LIVE
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572077633076&sk=events"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-shows"
            >
              VIEW SHOWS
            </a>
            <Link to="/contact" className="cta-button cta-contact">CONTACT US</Link>
          </div>
        </div>
      </section>

      <section className="band-photo-hero">
        <img src="/BandActionShot.jpg" alt="Grabthar's Hammer live" className="band-hero-img" />
      </section>
    </div>
  );
};

export default Home;
