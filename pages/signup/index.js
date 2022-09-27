// Page Head
import PageHead from "../components/pageHead/PageHead";

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
      <PageHead title="Sign Up"></PageHead>
      <SignUp />
    </div>
  );
}
Index.Layout = LogoLayout;
