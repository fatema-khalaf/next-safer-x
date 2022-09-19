import Footer from "../components/footer/footer";
import Header from "../components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
export default MainLayout;
