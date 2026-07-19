import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { LuSprout, LuPackage } from 'react-icons/lu';

export default function Dashboard({ user }) {
  const navigate = useNavigate();

  const tiles = [
    {
      icon: <LuSprout />,
      title: 'Browse the market',
      sub: 'Explore fresh listings from local farmers.',
      to: '/',
    },
    {
      icon: <LuPackage />,
      title: 'My orders',
      sub: 'Track your pickups and deliveries.',
      to: '/orders',
    },
  ];

  return (
    <section className="page">
      <h1 className="display page-title">Dashboard</h1>
      <p className="page-sub">Signed in as {user?.email || 'guest'}</p>

      <div className="tile-grid">
        {tiles.map((t) => (
          <button key={t.title} className="tile card" onClick={() => navigate(t.to)}>
            <span className="tile-icon">{t.icon}</span>
            <span className="tile-title">{t.title}</span>
            <span className="tile-sub">{t.sub}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
