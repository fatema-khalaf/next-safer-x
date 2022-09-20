import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";
import { rows, columns } from "../../DummyData/PopularMarketsData";
import { DataTable } from "../../components/table/DataTable";

export default function Index() {
  return (
    <div>
      <Head>
        <title> Markets | Eco-TX</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <DataTable rows={rows} columns={columns} withFilters={true} />
    </div>
  );
}
Index.Layout = MainLayout;
