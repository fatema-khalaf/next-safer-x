import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import "../styles/globals.css";
import ThemeContextProvider from "../context/ThemeContext";
import ThemeSwitcher from "../components/theme/ThemeSwitcher";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  const router = useRouter(); // For direction based on language

  return (
    <ThemeContextProvider>
      <ThemeSwitcher>
        <div style={{ direction: `${router.locale === "ar" ? "rtl" : "ltr"}` }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <div id="myportal" />
        </div>
      </ThemeSwitcher>
    </ThemeContextProvider>
  );
}
const EmptyLayout = ({ children }) => <>{children}</>;
export default appWithTranslation(MyApp);
