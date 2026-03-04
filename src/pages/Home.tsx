import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">GRABTHAR'S HAMMER</h1>
          <p className="hero-subtitle">Your favorite 90s rock cover band</p>
          <p className="hero-description">
            From Black Sabbath to modern rock, we bring the best of rock straight to your venue
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="content-container">
          <h2 className="section-title">ABOUT THE BAND</h2>
          <div className="about-content">
            <p>
              Grabthar's Hammer is a cover band dedicated to bringing you the best 
              rock anthems from the 90s and beyond. Whether you're craving the heavy riffs of 
              Black Sabbath, the grunge sounds of the 90s, or the fierce energy of modern rock, 
              we've got you covered.
            </p>
            <p>
              Our mission is simple: deliver authentic, powerful performances that get crowds 
              moving and singing along. We're not just playing songs—we're recreating the 
              experience of rock's greatest hits.
            </p>
          </div>

          <div className="band-members">
            <h3 className="subsection-title">THE LINEUP</h3>
            <div className="members-grid">
              <div className="member-card">
                <div className="member-icon">🎸</div>
                <h4>Lead Guitar</h4>
                <p>Shredding since the millennium</p>
              </div>
              <div className="member-card">
                <div className="member-icon">🎤</div>
                <h4>Vocals</h4>
                <p>Bringing the energy</p>
              </div>
              <div className="member-card">
                <div className="member-icon">🎸</div>
                <h4>Bass</h4>
                <p>Low end thunder</p>
              </div>
              <div className="member-card">
                <div className="member-icon">🥁</div>
                <h4>Drums</h4>
                <p>Keeping the beat alive</p>
              </div>
              <div className="member-card">
                <div className="member-icon">🪘</div>
                <h4>Percussion</h4>
                <p>Adding the groove</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="content-container">
          <h2>READY TO ROCK?</h2>
          <p>Check out our upcoming shows or get in touch to book us for your event!</p>
          <div className="cta-buttons">
            <Link to="/shows" className="cta-button">VIEW SHOWS</Link>
            <Link to="/contact" className="cta-button secondary">CONTACT US</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
