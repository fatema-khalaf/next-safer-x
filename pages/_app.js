import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <div data-theme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
const EmptyLayout = ({ children }) => <>{children}</>;
export default MyApp;
