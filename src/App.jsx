import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/movie">Movie</Link>
      <Link to="/show">TVSeries</Link>
    </Layout>
  );
}

export default App;
