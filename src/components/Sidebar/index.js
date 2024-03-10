import "./styles.css";

export function Sidebar({ listSidebar }) {
  return (
    <div className="side-menu">
      <ul>
        {listSidebar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
