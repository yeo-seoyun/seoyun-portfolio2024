import topButton from "/assets/icon-top.svg";

function GoToTop() {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      type="button"
      onClick={MoveToTop}
      className="fixed bottom-10 right-10 border w-12 h-12 rounded-full bg-white hover:border-2 sm:bottom-5 sm:right-3 cursor-none"
    >
      <img src={topButton} alt="상단으로 이동" className="w-full h-full" />
    </button>
  );
}

export default GoToTop;
