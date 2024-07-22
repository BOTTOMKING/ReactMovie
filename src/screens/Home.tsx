import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPopular, getMovie } from '../api';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const Home: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <Grid>
        {data.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => getMovie(movie.id).then(setSelectedMovie)}
          />
        ))}
      </Grid>
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Home;