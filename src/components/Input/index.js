import "./styles.css";

export function Input({ placeholder, className, type }) {
  return <input className={className} type={type} placeholder={placeholder} />;
}
