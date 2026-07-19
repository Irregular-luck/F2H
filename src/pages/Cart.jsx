import { useNavigate } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import { LuShoppingBasket } from 'react-icons/lu';

export default function Cart() {
  const navigate = useNavigate();

  return (
    <section className="page">
      <EmptyState
        icon={<LuShoppingBasket />}
        title="Your cart is empty"
        sub="Browse the market to add some fresh picks."
        actionLabel="Shop the market"
        onAction={() => navigate('/')}
      />
    </section>
  );
}
