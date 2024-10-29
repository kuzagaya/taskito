export default function Button({ type, children, onClick }) {
  return (
    <button
      className={`btn ${type === "secondary" && "btn--secondary"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
