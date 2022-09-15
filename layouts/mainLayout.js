const MainLayout = ({ children }) => {
  return (
    <div>
      <div style={{ width: "1000px", height: "300px", backgroundColor: "red" }}>
        <h1>this is header</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default MainLayout;
