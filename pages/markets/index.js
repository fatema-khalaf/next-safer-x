import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";
import { rows, columns } from "../../DummyData/PopularMarketsData";
import { DataTable } from "../../components/table/DataTable";
import PageTitleBanner from "../../components/UI/PageTitle";

export default function Index() {
  return (
    <div>
      <Head>
        <title> Markets | Eco-TX</title>
        <link rel="icon" href="/fav-icon.png" />
      </Head>
      <PageTitleBanner title="Markets" />
      <DataTable
        rows={rows}
        columns={columns}
        withFilters={true}
        rowsPerPage={5}
      />
    </div>
  );
}
Index.Layout = MainLayout;
