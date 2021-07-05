import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div><img src="/Baku.PNG" alt="Baku" /></div>
      </Link>
    </nav>
  );
}

export default Header;