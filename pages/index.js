// Page Head
import PageHead from "../components/pageHead/PageHead";

// Layout
import MainLayout from "../layouts/mainLayout";
// Page sections
import Apps from "../components/apps/Apps";
import Banner from "../components/hero/banner";
import TextScroll from "../components/UI/TextScroll";
import CardSection from "../sections/cards/cardsSection";
import PopularMarketSection from "../sections/PopularMarketSection";
// Multi lang
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
// Toaster
import ReactPuzzleConfirm from "../components/ReactPuzzleConfirm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmContainer from "../components/confirmation_window/ConfirmContainer";
import { useEffect, useState } from "react";
import Slider from "../components/Myslider/Slider";
import axios from "../lib/axios";
import AppUrl from "../lib/AppUrl";

// To provide language locale & menu in all child components
export async function getStaticProps({ locale }) {
  const menuResponse = await axios.get(AppUrl.Menu);
  const sliderResponse = await axios.get(AppUrl.Slider);
  const menu = menuResponse.data; // menu data
  const slider = sliderResponse.data.data; // slider data

  return {
    props: {
      locale,
      menu,
      slider,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home(props) {
  // const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(props.menu));
  }, []);

  // Toaster function
  const notify = () =>
    toast.info("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // Confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Confirmation puzzle
  const [showPuzzle, setShowPuzzle] = useState(false);

  return (
    <div>
      <PageHead title="home">
        <meta name="author" content="John Doe" />
      </PageHead>
      <Slider slides={props.slider} locale={props.locale} />
      <TextScroll />
      <Banner />
      <PopularMarketSection />
      <CardSection />
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <button onClick={() => setShowPuzzle(true)}>Puzzle!</button>
      <ReactPuzzleConfirm
        showPuzzle={showPuzzle}
        onClose={() => setShowPuzzle(false)}
        onSuccess={() => setShowPuzzle(false)}
        onFail={() => console.log("failed")}
        title="Please fit the puzzle piece carefully"
        sliderTitle="Slide to complete the puzzle"
        // failMessage="Error"
        // successMessage="Success"
        closeButtonLabel="Close"
        refrefButtonLabel="Refresh"
        disableRefreshIdleState={false}
      />
      <button onClick={() => setShowConfirmation(true)}>confirm!</button>
      <ConfirmContainer
        showConfirmation={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={() => setShowConfirmation(false)}
      />
      <Apps />
    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{" "}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  );
}
Home.Layout = MainLayout;
