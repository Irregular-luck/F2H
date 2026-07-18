import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SignInCard from './components/SignInCard';
import SignUpCard from './components/SignUpCard'; // Import the new view

function App() {
  
  const [view, setView] = useState('signin'); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
    
      {view === 'signin' ? <SignInCard onNavigate={setView}/> : <SignUpCard onNavigate={setView}/>}
    </div>
  );
}

export default App;