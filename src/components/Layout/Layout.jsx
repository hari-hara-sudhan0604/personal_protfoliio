import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function Layout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <ScrollToTopButton/>
      <Footer />
    </>
  );
}

export default Layout;