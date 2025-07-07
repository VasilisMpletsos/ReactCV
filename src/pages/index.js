import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "@/components/Navbar";
import Experience from "./experience";
import ProgrammingLanguages from "./languages";
import Projects from "./projects";
import Introduction from "./introduction";
import { useRouter } from 'next/router';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const router = useRouter();
  const { section } = router.query;

  const renderContent = () => {
    switch (section) {
      case "experience":
        return <Experience />;
      case "languages":
        return <ProgrammingLanguages />;
      case "projects":
        return <Projects />;
      case "education":
        return (
          <div>
            <h2>Education</h2>
            <p>Under Construction...</p>
          </div>
        );
      default:
        return <Introduction />;
    }
  };

  return (
    <>
      <Head>
        <title>Vasilis Mpletsos CV</title>
        <meta name="description" content="This is my personal site to show my CV online." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ResponsiveAppBar />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {renderContent()}
      </div>
    </>
  );
}
