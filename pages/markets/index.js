import Head from "next/head";
import MarketsTable from "../../components/market/MarketsTable";
import MainLayout from "../../layouts/MainLayout";
import { items } from "../../DummyData/PopularMarketsData";

export default function Index() {
  return (
    <div>
      <Head>
        <title> Markets | Eco-TX</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <MarketsTable items={items} />
    </div>
  );
}
Index.Layout = MainLayout;
