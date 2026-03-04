import './Gallery.css';

const Gallery = () => {
  // Placeholder gallery items
  const galleryItems = [
    { id: 1, type: 'image', title: 'Live at The Rock House' },
    { id: 2, type: 'video', title: 'Black Sabbath Cover' },
    { id: 3, type: 'image', title: 'Band Practice Session' },
    { id: 4, type: 'image', title: 'Crowd Favorite Moment' },
    { id: 5, type: 'video', title: 'Full Set Highlight Reel' },
    { id: 6, type: 'image', title: 'Backstage Vibes' },
    { id: 7, type: 'image', title: 'Thunder Alley Performance' },
    { id: 8, type: 'video', title: '90s Rock Medley' },
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <h1 className="page-title">MEDIA GALLERY</h1>
        <p className="page-subtitle">Photos and videos from our performances</p>
      </section>

      <section className="gallery-section">
        <div className="content-container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className={`gallery-item ${item.type}`}>
                <div className="gallery-placeholder">
                  <div className="placeholder-icon">
                    {item.type === 'image' ? '📷' : '🎬'}
                  </div>
                  <div className="placeholder-label">{item.type.toUpperCase()}</div>
                </div>
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <h3>Want to see more?</h3>
            <p>Follow us on social media for the latest photos and videos</p>
            <div className="social-buttons">
              <a 
                href="https://www.facebook.com/profile.php?id=61572077633076" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                FACEBOOK
              </a>
              <a 
                href="https://instagram.com/grabtharshammer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                INSTAGRAM
              </a>
              <a 
                href="https://youtube.com/@grabtharshammer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
