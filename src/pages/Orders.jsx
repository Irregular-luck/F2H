import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import './Dashboard.css';
import { LuPackage } from 'react-icons/lu';

export default function Orders() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <h1 className="display page-title" style={{ marginBottom: '2rem' }}>
        My orders
      </h1>

      <EmptyState
        boxed
        icon={<LuPackage />}
        title="No orders yet"
        sub="Time to shop for something fresh."
        actionLabel="Browse market"
        onAction={() => navigate('/')}
      />
    </section>
  );
}
