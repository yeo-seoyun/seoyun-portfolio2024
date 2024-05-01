import { Link, useLocation } from "react-router-dom";
import syLogo from "/seoyun-logo.svg";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed w-full flex items-center justify-between px-20 py-2 border-b z-50 backdrop-blur-sm">
      <div className="flex items-center gap-1">
        <img src={syLogo} className="w-14 h-14" alt="Seoyun logo" />
        <Link to="/" className="font-bold text-black-100">
          SEOYUN`S WEB PORTFOLIO
        </Link>
      </div>
      {isHomePage && (
        <div className="text-xl flex items-center justify-between gap-5">
          <a href="#home" className="hover:text-purple-100 transition-all">
            HOME
          </a>
          <a href="#about-me" className="hover:text-purple-100 transition-all">
            ABOUT ME
          </a>
          <a href="#portfolio" className="hover:text-purple-100 transition-all">
            PORTFOLIO
          </a>
          <a href="#design" className="hover:text-purple-100 transition-all">
            DESIGN
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
