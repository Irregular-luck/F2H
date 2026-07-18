import React from 'react';
import Navbar from './components/Navbar';
import SignInCard from './components/SignInCard';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <SignInCard />
    </div>
  );
}

export default App;