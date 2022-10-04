import Head from "next/head";

const PageHead = ({ title, children }) => {
  return (
    <Head>
      <title>{title} | Soft-Box</title>
      <link rel="icon" href="/fav-icon.png" />
      {children}
    </Head>
  );
};
export default PageHead;
