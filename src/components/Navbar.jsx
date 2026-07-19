import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { LuSprout, LuLayoutDashboard, LuPackage, LuShoppingBasket, LuLogOut } from 'react-icons/lu';

const links = [
  { to: '/', label: 'Market', icon: null, end: true },
  { to: '/dashboard', label: 'Dashboard', icon: <LuLayoutDashboard /> },
  { to: '/orders', label: 'Orders', icon: <LuPackage /> },
  { to: '/cart', label: 'Cart', icon: <LuShoppingBasket /> },
];

export default function Navbar({ onSignOut }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        <div className="brand-logo">
          <LuSprout className="logo-icon" />
        </div>
        <span className="brand-name">F2H</span>
      </NavLink>

      <div className="nav-menu">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => `menu-item${isActive ? ' active' : ''}`}
          >
            {l.icon}
            {l.label}
          </NavLink>
        ))}
        <button className="menu-item signout" onClick={onSignOut}>
          <LuLogOut />
          Sign out
        </button>
      </div>
    </nav>
  );
}
