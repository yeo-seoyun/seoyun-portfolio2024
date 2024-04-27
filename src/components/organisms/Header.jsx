import { Link } from "react-router-dom";
import syLogo from "/seoyun-logo.svg";

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-20 bg-blue-50">
      <button type="button">
        <img src={syLogo} className="w-14 h-14" alt="Seoyun logo" />
      </button>
      <div className="font-suit text-xl flex items-center justify-between gap-5">
        <Link to="">HOME</Link>
        <Link to="">ABOUT ME</Link>
        <Link to="">PROJECT</Link>
      </div>
    </header>
  );
}

export default Header;
