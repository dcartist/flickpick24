import React, { useState } from 'react';
import axios from 'axios';

export default function MovePosterMaker() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [mood, setMood] = useState('');
  const [style, setStyle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const genres = [
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'Fantasy',
    'Mystery',
    'Adventure',
    'Documentary',
    'Animation'
  ];

  const moods = [
    'Dark',
    'Light',
    'Mysterious',
    'Uplifting',
    'Intense',
    'Whimsical',
    'Melancholic',
    'Suspenseful',
    'Romantic',
    'Energetic'
  ];

  const styles = [
    'Modern',
    'Vintage',
    'Noir',
    'Minimalist',
    'Retro',
    'Cinematic',
    'Abstract',
    'Classic',
    'Futuristic',
    'Artistic'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const apiUrl = process.env.REACT_APP_MOVIE_POSTER_CREATOR_URLDEV;
      const response = await axios.post(
        apiUrl,
        { name, genre, mood, style },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 60000,
        }
      );

      console.log('API Response:', response.data);
      const url = response.data?.data?.output_url || response.data?.data?.url || response.data?.imageUrl;
      if (url) {
        setImageUrl(url);
      } else {
        throw new Error('No image URL received from API');
      }
    } catch (err) {
      console.error('Error generating poster:', err);

      // Axios-specific handling with explicit 429 message
      if (axios.isAxiosError(err)) {
        if (err.response) {
          if (err.response.status === 429) {
            setError('Sorry to many requests have been made please come back in an hour');
          } else {
            const msg = err.response?.data?.message || `HTTP error! status: ${err.response.status}`;
            setError(msg);
          }
        } else if (err.request) {
          setError('No response from server. Please check your connection.');
        } else {
          setError(err.message || 'An error occurred while generating the poster');
        }
      } else {
        setError(err.message || 'An error occurred while generating the poster');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Movie Poster Maker</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
            Movie Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            placeholder="Enter movie name"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="genre" style={{ display: 'block', marginBottom: '5px' }}>
            Genre:
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          >
            <option value="">Select a genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="mood" style={{ display: 'block', marginBottom: '5px' }}>
            Mood:
          </label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          >
            <option value="">Select a mood</option>
            {moods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="style" style={{ display: 'block', marginBottom: '5px' }}>
            Style:
          </label>
          <select
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          >
            <option value="">Select a style</option>
            {styles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: loading ? '#6c757d' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Generating...' : 'Generate Poster'}
        </button>
      </form>

      {error && (
        <div style={{ 
          marginTop: '20px', 
          color: 'red', 
          padding: '10px', 
          backgroundColor: '#fee', 
          border: '1px solid #fcc',
          borderRadius: '5px' 
        }}>
          <p>Error: {error}</p>
        </div>
      )}

      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h2>Generated Poster:</h2>
          <img
            src={imageUrl}
            alt="Generated Movie Poster"
            style={{ 
              maxWidth: '100%', 
              borderRadius: '5px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
            }}
            onError={() => setError('Failed to load generated image')}
          />
          <div style={{ marginTop: '10px' }}>
            <a 
              href={imageUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
              }}
            >
              View Full Size
            </a>
          </div>
        </div>
      )}
    </div>
  );
}