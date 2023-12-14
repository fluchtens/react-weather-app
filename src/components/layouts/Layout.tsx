import { Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex-col flex">
      <Header />
      <main className="md:max-w-[1024px] w-full m-auto p-4">
        {pathname === "/" ? <Home /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
