// Page Head
import PageHead from "../../components/pageHead/PageHead";
// Layout
import MainLayout from "../../layouts/mainLayout";
// Multi lang
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import axios from "../../lib/axios";
import AppUrl from "../../lib/AppUrl";
import PageTitleBanner from "../../components/UI/PageTitle";
import BlogTopics from "../../sections/blog/BlogTopics";
import BlogArticlesCards from "../../sections/blog/BlogArticlesCards";
import { useTranslation } from "next-i18next";

// To provide language locale & menu in all child components
export async function getStaticProps({ locale }) {
  const menuResponse = await axios.get(AppUrl.Menu);
  const menu = menuResponse.data; // menu data
  const topicsRequest = await axios.get(AppUrl.Topics);
  const topics = topicsRequest.data.data; // topics data
  const articlesRequest = await axios.get(AppUrl.Articles);
  const articles = articlesRequest.data.data; // articles data

  return {
    props: {
      locale,
      menu,
      topics,
      articles,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home(props) {
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(props.menu));
  }, []);

  return (
    <div>
      <PageHead title="blog"></PageHead>
      <PageTitleBanner title={t("blogTitle")} subTitle={t("blogSubTitle")} />
      <BlogTopics topics={props.topics} locale={props.locale} />
      <BlogArticlesCards articles={props.articles} locale={props.locale} />
    </div>
  );
}
Home.Layout = MainLayout;
