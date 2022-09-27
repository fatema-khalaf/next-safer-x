import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";
import { rows, columns } from "../../DummyData/PopularMarketsData";
import { DataTable } from "../../components/table/DataTable";
import PageTitleBanner from "../../components/UI/PageTitle";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PageHead from "../../components/pageHead/PageHead";

export async function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default function Index() {
  const { t } = useTranslation("common");
  return (
    <div>
      <PageHead title={t("exchange")} />
      <PageTitleBanner title={t("exchange")} />
    </div>
  );
}
Index.Layout = MainLayout;
