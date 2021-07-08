import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
     
      <nav className="nav">
        <Link to="/">
          <div><img src="/Baku.PNG" alt="Baku" /> </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;