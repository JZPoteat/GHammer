import { Link } from 'react-router-dom';
import './Shows.css';

const Shows = () => {
  // Placeholder show data
  const upcomingShows = [
    {
      id: 1,
      date: 'April 15, 2026',
      venue: 'The Rock House',
      location: 'Charlotte, NC',
      time: '8:00 PM',
    },
    {
      id: 2,
      date: 'May 3, 2026',
      venue: 'Thunder Alley',
      location: 'Charlotte, NC',
      time: '9:00 PM',
    },
    {
      id: 3,
      date: 'May 20, 2026',
      venue: 'The Underground',
      location: 'Charlotte, NC',
      time: '7:30 PM',
    },
  ];

  const pastShows = [
    {
      id: 1,
      date: 'February 28, 2026',
      venue: 'Vaulted Oak Brewing',
      location: 'Charlotte, NC',
    }
  ];

  return (
    <div className="shows-page">
      <section className="shows-hero">
        <h1 className="page-title">LIVE SHOWS</h1>
        <p className="page-subtitle">Catch us live and experience the thunder</p>
      </section>

      <section className="shows-section">
        <div className="content-container">
          <h2 className="section-title">UPCOMING SHOWS</h2>
          <div className="shows-list">
            {upcomingShows.map((show) => (
              <div key={show.id} className="show-card upcoming">
                <div className="show-date">
                  <span className="date-text">{show.date}</span>
                  <span className="time-text">{show.time}</span>
                </div>
                <div className="show-details">
                  <h3 className="venue-name">{show.venue}</h3>
                  <p className="location">{show.location}</p>
                </div>
                <div className="show-action">
                  <button className="tickets-button">GET INFO</button>
                </div>
              </div>
            ))}
          </div>

          <div className="booking-cta">
            <h3>Want us at your venue?</h3>
            <p>We're always looking for new places to rock!</p>
            <Link to="/contact" className="book-button">BOOK US</Link>
          </div>
        </div>
      </section>

      <section className="past-shows-section">
        <div className="content-container">
          <h2 className="section-title">PAST PERFORMANCES</h2>
          <div className="past-shows-list">
            {pastShows.map((show) => (
              <div key={show.id} className="show-card past">
                <div className="show-date-past">{show.date}</div>
                <div className="show-details-past">
                  <h4>{show.venue}</h4>
                  <p>{show.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shows;
