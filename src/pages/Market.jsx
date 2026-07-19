import { useNavigate } from 'react-router-dom';
import './Market.css';
import { LuSprout, LuStore, LuTruck } from 'react-icons/lu';
import hero from '../assets/marketimage.jpg';

export default function Market() {
  const navigate = useNavigate();

  return (
    <section className="market page">
      <div className="hero">
        <div className="hero-copy">
          <span className="pill">
            <LuSprout /> Farm to Home
          </span>

          <h1 className="display hero-title">
            Fresh groceries,
            <br />
            <span className="accent">straight from the farm.</span>
          </h1>

          <p className="hero-lede">
            F2H connects local farmers directly with your kitchen. Skip the
            middlemen, support growers, and pick up or get delivery on your terms.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => navigate('/cart')}>
              Shop the market
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>
              Sell as a farmer
            </button>
          </div>

          <div className="hero-features">
            <div className="feature card">
              <span className="feature-title">
                <LuStore /> Pickup
              </span>
              <span className="feature-sub">Meet your farmer at the farm.</span>
            </div>
            <div className="feature card">
              <span className="feature-title">
                <LuTruck /> Delivery
              </span>
              <span className="feature-sub">We bring it to your door.</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <img src={hero} alt="Fresh vegetables from the farm" />
        </div>
      </div>
    </section>
  );
}
