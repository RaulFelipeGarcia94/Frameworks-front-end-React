import "./styles.css";

export function Menu({ listMenu }) {
  return (
    <div className="menu">
      <ul className="menu-list">
        {listMenu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
