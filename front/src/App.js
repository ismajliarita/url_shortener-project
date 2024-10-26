import { useState } from "react";
import './App.css';
import axios from 'axios';

export default function App() {

  const [originalURL, setOriginalURL] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/short', { originalURL })
    .then((res) => {
      setShortUrl(res.data.url.shortUrl);
      console.log("API response", res.data.url.shortUrl);
    })
    .catch((err) => {
      console.log("API error", err);
    });
  }

  return (
    <div
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, height: '100vh', background: 'lightgray'}}
    >
      <div
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh', background: 'white', color: 'black', fontFamily: 'Arial', width: '30%', height: '50%', borderRadius: '0.5rem'
      }}
      >
        <h1>URL Shortener</h1>
        <input 
        // value={originalURL}
        onChange={(e)=>setOriginalURL(e.target.value)}
        type="text" 
        placeholder="Enter URL to shorten"
        name="originalUrl" 
        required
        style={{padding: '0.5rem', margin: '1rem', borderRadius: '0.375rem', width: '80%'}}
        ></input>
        <button onClick={handleSubmit} type="button" 
        style={{background: 'purple',
          color: 'white',
          borderRadius: '0.375rem', 
          padding: '0.5rem 1rem', 
          fontWeight: '600', 
          }}>Shorten</button>
           
            {shortUrl && (
              <div>
                <p>Shortened URL: <a href={`http://localhost:3000/${shortUrl}`} 
                target="_blank"
                rel="noopener noreferrer"
                >{`http://localhost:3000/${shortUrl}`}</a></p>
              </div>
            )} 
            
      </div>
    </div>
  );
}