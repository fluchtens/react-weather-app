import { Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div>
        <Header />
        <main>{pathname === "/" ? <Home /> : <Outlet />}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
