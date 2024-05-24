import { Link, useLocation } from "react-router-dom";
import syLogo from "/seoyun-logo.svg";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed w-full flex items-center justify-between px-20 py-2 border-b z-50 backdrop-blur-sm md:px-4 sm:px-2">
      <Link
        to="/"
        className="flex items-center gap-1 font-bold text-xs text-black-100"
      >
        <img
          src={syLogo}
          className="w-10 h-10 sm:w-10 sm:h-10"
          alt="Seoyun logo"
        />
        <p className="sm:hidden">SEOYUN`S WEB PORTFOLIO</p>
      </Link>

      {isHomePage && (
        <div className="text-lg flex items-center justify-between gap-5 md:text-base sm:text-sm">
          <a href="#none" className="hover:text-purple-100 transition-all">
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
