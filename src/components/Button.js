import "./styles.css";

export default function Button({ results }) {
  const scrolling = window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
  return (
    results.length > 0 && (
      <button type="button" onClick={scrolling} className="Button">
        Load more
      </button>
    )
  );
}
