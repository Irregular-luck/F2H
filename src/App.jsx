import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignInCard from './components/SignInCard';
import SignUpCard from './components/SignUpCard';
import Market from './pages/Market';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Cart from './pages/Cart';

function AuthGate({ onLogin }) {
  const [view, setView] = useState('signin');
  return view === 'signin'
    ? <SignInCard onNavigate={setView} onLogin={onLogin} />
    : <SignUpCard onNavigate={setView} onLogin={onLogin} />;
}

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email) => setUser({ email });
  const handleSignOut = () => {
    setUser(null);
    navigate('/');
  };

  if (!user) {
    return (
      <div className="app-shell">
        <AuthGate onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/dashboard" element={<Dashboard user={user} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
