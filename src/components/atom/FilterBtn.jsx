function FilterBtn({ onMouseOver, onMouseOut, currentFilter, setFilter }) {
  const buttons = ["All", "Web", "Design"];
  return (
    <div className="button-group flex gap-6 p-3 border rounded-full sm:gap-3">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => setFilter(button)}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          className={`cursor-none w-24 px-4 py-2 rounded-full transition-colors duration-300 sm:w-18 sm:px-0 sm:text-sm ${
            currentFilter === button
              ? "bg-purple-100 text-white"
              : "bg-white hover:bg-purple-100 hover:bg-opacity-20"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default FilterBtn;
