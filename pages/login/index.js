import Head from "next/head";
import Login from "../../components/login/Login";
import LogoLayout from "../../layouts/LogoLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// add
export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Index() {
  return (
    <div>
      <Head>
        <title>LogIn | Eco-TX </title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <Login />
    </div>
  );
}
Index.Layout = LogoLayout;
