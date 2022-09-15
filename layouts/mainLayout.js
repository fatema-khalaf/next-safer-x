import Header from "../components/header/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
export default MainLayout;
