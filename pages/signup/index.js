import Head from "next/head";
import Login from "../../components/login/Login";
import SignUp from "../../components/signUp/SignUpForm";
import LogoLayout from "../../layouts/LogoLayout";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home | Sign Up</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <SignUp />
    </div>
  );
}
Index.Layout = LogoLayout;
