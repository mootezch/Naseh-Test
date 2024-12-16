import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </div>
  );
};

export default App;