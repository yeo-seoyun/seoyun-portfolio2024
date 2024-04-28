import syLogo from "/seoyun-logo.svg";

function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between px-20 py-2 border-b">
      <button type="button" className="flex items-center gap-1">
        <img src={syLogo} className="w-14 h-14" alt="Seoyun logo" />
        <span className="font-bold text-black-100">SEOYUN`S WEB PORTFOLIO</span>
      </button>
      <div className="text-xl flex items-center justify-between gap-5">
        <a href="#home">HOME</a>
        <a href="#about-me">ABOUT ME</a>
        <a href="#portfolio">PORTFOLIO</a>
      </div>
    </header>
  );
}

export default Header;
