import "./styles.css";

export default function Button({ onClick, results }) {
  return (
    results.length > 0 && (
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    )
  );
}
