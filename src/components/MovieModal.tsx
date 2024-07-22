import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { makeBgPath } from '../api';

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    vote_average: number;
    homepage: string;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const ModalHeader = styled.div`
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  position: relative;
`;

const ModalBody = styled.div`
  padding: 1rem;
  color: #333;
  background: #f9f9f9;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ y: '-50%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '-50%', opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h2>{movie.title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <img src={makeBgPath(movie.backdrop_path)} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Budget:</strong> ${movie.budget.toLocaleString()}</p>
          <p><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>
          <p><strong>Homepage:</strong> <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie.homepage}</a></p>
        </ModalBody>
      </ModalContent>
    </Overlay>
  );
};

export default MovieModal;