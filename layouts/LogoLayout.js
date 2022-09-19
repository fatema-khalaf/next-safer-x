import LogoHeader from "../components/header/LogoHeader";

const LogoLayout = ({ children }) => {
  return (
    <div>
      <LogoHeader />
      {children}
    </div>
  );
};
export default LogoLayout;
