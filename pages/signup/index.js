import Head from "next/head";
import Login from "../../components/login/Login";
import SignUp from "../../components/signUp/SignUpForm";
import LogoLayout from "../../layouts/LogoLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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
        <title>Sign Up | Eco-TX</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <SignUp />
    </div>
  );
}
Index.Layout = LogoLayout;
