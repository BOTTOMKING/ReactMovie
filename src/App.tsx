import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './globalStyles';
import NavBar from './components/NavBar';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <NavBar />
      <Outlet />
    </QueryClientProvider>
  );
};

export default App;