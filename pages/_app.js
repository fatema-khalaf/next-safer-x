import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  const router = useRouter(); // For direction based on language

  return (
    // <div data-theme="dark">
    <div style={{ direction: `${router.locale === "ar" ? "rtl" : "ltr"}` }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div
        id="myportal"
        // style={{ direction: `${router.locale === "ar" ? "rtl" : "ltr"}` }}
      />
    </div>
  );
}
const EmptyLayout = ({ children }) => <>{children}</>;
export default appWithTranslation(MyApp);
