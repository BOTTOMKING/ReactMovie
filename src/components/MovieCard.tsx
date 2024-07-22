import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { makeImagePath } from '../api';

const Card = styled(motion.div)`
  width: 200px;
  margin: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    backdrop_path: string;
  };
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <Card
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={makeImagePath(movie.backdrop_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Card>
  );
};

export default MovieCard;