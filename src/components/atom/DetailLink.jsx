import { Link } from "react-router-dom";

function DetailLink({ to, children }) {
  return (
    <Link
      to={to}
      target="_blank"
      className="text-sm border border-black-100 rounded-full py-1 px-2 hover:bg-black-100 hover:text-white transition-all"
    >
      {children}
    </Link>
  );
}

export default DetailLink;
