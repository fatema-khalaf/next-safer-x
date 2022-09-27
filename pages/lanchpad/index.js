import Head from "next/head";
import MainLayout from "../../layouts/MainLayout";
import PageTitleBanner from "../../components/UI/PageTitle";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LanchpadSection from "../../sections/LaunchpadSection";
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
  const THREE_DAYS_IN_MS = 1 * 24 * 60 * 60 * 1000; // the time to set timer countdown in ms

  return (
    <div>
      <PageHead title={t("lanchpad")} />
      <PageTitleBanner title={t("lanchpad")} />
      <LanchpadSection countdown={THREE_DAYS_IN_MS} />
    </div>
  );
}
Index.Layout = MainLayout;
