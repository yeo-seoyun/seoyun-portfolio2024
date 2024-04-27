import syLogo from "/seoyun-logo.svg";

function App() {
  return (
    <div className="flex bg-pink-300">
      <div>
        <a href="/" target="_blank">
          <img src={syLogo} className="logo" alt="Seoyun logo" />
        </a>
      </div>
      <h1>Seo yun's Portfolio</h1>
    </div>
  );
}

export default App;
