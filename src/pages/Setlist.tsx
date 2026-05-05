import { useState } from 'react';
import './Setlist.css';

const Setlist = () => {
  // Our current song repertoire with genre tags
  const allSongs = [
    { artist: 'Beck', song: 'Loser', genre: 'Alternative Rock' },
    { artist: 'Black Sabbath', song: 'The Wizard', genre: 'Classic Rock' },
    { artist: 'Black Sabbath', song: 'War Pigs', genre: 'Classic Rock' },
    { artist: 'Brant Bjork', song: 'Biker #2', genre: 'Stoner Rock' },
    { artist: 'Chevelle', song: 'The Red', genre: 'Alternative Metal' },
    { artist: 'Collective Soul', song: 'Shine', genre: '90s Rock' },
    { artist: 'Cracker', song: 'Low', genre: 'Alternative Rock' },
    { artist: 'Everclear', song: 'Santa Monica', genre: '90s Rock' },
    { artist: 'Foghat', song: 'Slow Ride', genre: 'Classic Rock' },
    { artist: 'Foo Fighters', song: 'Gimme Stiches', genre: 'Alternative Rock' },
    { artist: 'Foo Fighters', song: 'My Hero', genre: 'Alternative Rock' },
    { artist: 'Gary Clark Jr.', song: 'Bright Lights (live)', genre: 'Blues Rock' },
    { artist: 'Geezers Butlers', song: 'Pahoehoe', genre: 'Stoner Rock' },
    { artist: 'Green Day', song: 'Brain Stew', genre: 'Punk Rock' },
    { artist: 'Green Day', song: 'When I Come Around', genre: 'Punk Rock' },
    { artist: 'Jason Isbell', song: 'Super 8', genre: 'Americana' },
    { artist: 'Jet', song: 'Are You Gonna be my Girl', genre: 'Garage Rock' },
    { artist: 'Jimmy Eat World', song: 'The Middle', genre: 'Emo/Alternative' },
    { artist: 'Masters of Reality', song: 'Domino', genre: 'Stoner Rock' },
    { artist: 'Nirvana', song: 'Hearth Shaped Box', genre: 'Grunge' },
    { artist: 'Nirvana', song: "Molly's Lips", genre: 'Grunge' },
    { artist: 'QUOTSA', song: 'If Only', genre: 'Alternative Rock' },
    { artist: 'QUOTSA', song: 'Lost Art of Keeping a Secret', genre: 'Alternative Rock' },
    { artist: 'Royal Blood', song: 'Out of the Black', genre: 'Hard Rock' },
    { artist: 'Screaming Trees', song: 'Nearly Lost You', genre: 'Grunge' },
    { artist: 'Silversun Pickups', song: 'Lazy Eye', genre: 'Indie Rock' },
    { artist: 'STP', song: 'Interstate Love Song', genre: 'Grunge' },
    { artist: 'STP', song: 'Plush', genre: 'Grunge' },
    { artist: 'The Black Keys', song: 'Hard Row', genre: 'Blues Rock' },
    { artist: 'The Black Keys', song: 'Lonely Boy', genre: 'Blues Rock' },
    { artist: 'The Cult', song: 'She Sells Sanctuary', genre: 'Alternative Rock' },
    { artist: 'The Cult', song: 'Wildflower', genre: 'Alternative Rock' },
    { artist: 'Toadies', song: 'Possum Kingdom', genre: '90s Rock' },
    { artist: 'Tom Petty', song: "Mary Jane's Last Dance", genre: 'Classic Rock' },
    { artist: 'Tom Petty', song: 'You Wreck Me', genre: 'Classic Rock' },
    { artist: 'Velvet Revolver', song: 'Slither', genre: 'Hard Rock' },
    { artist: 'Weezer', song: 'Hash Pipe', genre: 'Alternative Rock' },
    { artist: 'Weezer', song: "Say It Ain't So", genre: 'Alternative Rock' },
    { artist: 'White Stripes', song: 'Seven Nation Army', genre: 'Garage Rock' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('All');

  // Get unique genres for filter dropdown
  const genres = ['All', ...Array.from(new Set(allSongs.map(song => song.genre)))].sort();

  // Filter songs based on search and genre
  const filteredSongs = allSongs.filter(song => {
    const matchesSearch = 
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.song.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === 'All' || song.genre === genreFilter;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="setlist-page">
      <section className="setlist-hero">
        <h1 className="page-title">OUR SETLIST</h1>
      </section>

      <section className="setlist-section">
        <div className="content-container">
          <div className="controls">
            <input
              type="text"
              placeholder="Search by artist or song..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
              className="genre-filter"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div className="results-count">
            Showing {filteredSongs.length} of {allSongs.length} songs
          </div>

          <div className="table-container">
            <table className="setlist-table">
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Song</th>
                  <th>Genre</th>
                </tr>
              </thead>
              <tbody>
                {filteredSongs.map((item, index) => (
                  <tr key={index}>
                    <td className="artist-cell">{item.artist}</td>
                    <td className="song-cell">{item.song}</td>
                    <td className="genre-cell">{item.genre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSongs.length === 0 && (
            <div className="no-results">
              No songs found. Try a different search or filter.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Setlist;
