import { Input } from "../Input";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <Logo />
      <Input className="searchInput" placeholder="Pesquisar" type="text" />
      <Menu listMenu={["Dashboard", "Team", "Projects", "Calendar"]} />
    </header>
  );
}
