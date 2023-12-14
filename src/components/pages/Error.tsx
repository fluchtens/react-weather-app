import { Link } from "react-router-dom";
import errorLogo from "/cry_emoji.png";

export default function Error() {
  return (
    <main className="min-h-screen	flex justify-center items-center">
      <div className="max-w-[40rem] m-auto text-center">
        <h1 className="flex justify-center items-center">
          <span className="text-9xl font-bold">4</span>
          <img
            className="w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem]"
            src={errorLogo}
          />
          <span className="text-9xl font-bold">4</span>
        </h1>
        <h2 className="mt-1 text-lg	md:text-2xl font-semibold">
          Oops! Page Not Be Found
        </h2>
        <p className="mt-1 text-sm md:text-base font-normal text-quaternary">
          Sorry but the page you are looking for does not exist, has been
          removed. name changed or is temporarily unavailable
        </p>
        <Link to="/" className="text-sm md:text-base font-medium">
          Back to home
        </Link>
      </div>
    </main>
  );
}
