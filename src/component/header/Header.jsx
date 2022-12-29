import Nav from "./Nav";
import Search from "./Search";
import logo from "../../picture/logo2.svg";
import { NavLink } from "react-router-dom";
import { useScrollY } from "../../hooks/useScrollY";

export default function Header() {
  const scrollY = useScrollY();

  return (
    <nav id="masthead" className={scrollY < 70 ? `header` : `header scrolled`}>
      <div className="logo">
        <NavLink to="/" title="Hex download">
          <img src={logo}></img>
        </NavLink>
      </div>
      <Nav />
      <Search />
    </nav>
  );
}
