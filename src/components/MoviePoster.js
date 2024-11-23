import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MoviePoster.css";

const MoviePoster = () => {
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://movie-loki-backend.onrender.com/api/movie")
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error ao carregar o filme:", err));
  }, []);

  if (!movie) return <p>Carregar...</p>;

  return (
    <div>
      <img
        src="/assets/Loki-front.jpeg"
        alt={movie.title}
        style={{ cursor: "pointer", width: "100%" }}
        onClick={() => setModalOpen(true)}
      />

      {isModalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <div className="modal-center">
            <h1>{movie.title}</h1>
            <p style={{color: "#fff"}}>{movie.description}</p>
            <iframe
              width="560"
              height="315"
              src={movie.trailer}
              title="Trailer do Loki"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{width: "100%"}}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePoster;
