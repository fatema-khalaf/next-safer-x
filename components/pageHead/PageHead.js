import Head from "next/head";

const PageHead = ({ title, children }) => {
  return (
    <Head>
      <title>{title} | Eco-TX</title>
      <link rel="icon" href="/fav-icon.png" />
      {children}
    </Head>
  );
};
export default PageHead;
