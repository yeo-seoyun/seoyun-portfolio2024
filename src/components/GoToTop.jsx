import topButton from "/assets/icon-top.svg";

function GoToTop() {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={MoveToTop}
      className="fixed bottom-10 right-10 cursor-pointer border w-12 h-12 rounded-full bg-white hover:border-2 sm:bottom-5 sm:right-3"
    >
      <img src={topButton} alt="상단으로 이동" className="w-full h-full" />
    </div>
  );
}

export default GoToTop;
