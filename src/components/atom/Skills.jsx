function Skill({ image, name }) {
  return (
    <div className="relative group">
      <img src={image} alt={name} className="w-7 h-7" />
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full mb-2 px-2 py-1 text-xs opacity-0 group-hover:opacity-100">
        {name}
      </span>
    </div>
  );
}

export default Skill;
