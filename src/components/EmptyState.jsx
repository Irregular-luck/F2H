import './EmptyState.css';

export default function EmptyState({ icon, title, sub, actionLabel, onAction, boxed }) {
  const content = (
    <div className="empty-inner">
      <span className="empty-icon">{icon}</span>
      <h2 className="display empty-title">{title}</h2>
      <p className="empty-sub">{sub}</p>
      <button className="btn btn-primary" onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  );

  return (
    <div className={`empty-state${boxed ? ' boxed' : ''}`}>
      {boxed ? <div className="empty-box card">{content}</div> : content}
    </div>
  );
}
