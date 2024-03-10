import "./styles.css";

export function CardSection({ title, content }) {
  return (
    <div className="content-section">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
