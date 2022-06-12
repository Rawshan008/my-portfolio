import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className="px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
