import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="px-4 border-b border-slate-200 border-opacity-10">
      <div className="max-w-screen-lg m-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="py-4 text-lg font-medium">react-weather-app</h1>
        </Link>
        <a
          href={"https://github.com/fluchtens/react-weather-app"}
          className="p-4 h-full flex justify-center items-center"
        >
          <FaGithub className="text-2xl text-tertiary" />
        </a>
      </div>
    </header>
  );
}
