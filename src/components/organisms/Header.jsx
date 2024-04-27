import { Link } from "react-router-dom";
import syLogo from "/seoyun-logo.svg";

function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <button type="button">
        <img src={syLogo} className="w-24 h-12" alt="Seoyun logo" />
      </button>
      <div className="flex items-center justify-between gap-5">
        <Link to="">HOME</Link>
        <Link to="">ABOUT ME</Link>
        <Link to="">PROJECT</Link>
      </div>
    </header>
  );
}

export default Header;
