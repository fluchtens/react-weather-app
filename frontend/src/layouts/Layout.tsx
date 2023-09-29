import { Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../styles/Layout.module.scss";

function Layout() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Header />
          {pathname === "/" ? <Home /> : <Outlet />}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
