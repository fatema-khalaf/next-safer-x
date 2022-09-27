import Head from "next/head";
import Login from "../../components/login/Login";
import LogoLayout from "../../layouts/LogoLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageHead from "../../components/pageHead/PageHead";

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
      <PageHead title="Login" />
      <Login />
    </div>
  );
}
Index.Layout = LogoLayout;
