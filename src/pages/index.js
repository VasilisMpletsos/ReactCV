import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "@/components/Navbar";
import Chat from "@/components/Chat";
import Experience from "./experience";
import ProgrammingLanguages from "./programming";
import Projects from "./projects";
import Introduction from "./introduction";
import Studies from "./studies";
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
        return <Studies />;;
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
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Vasilis Mpletsos, Bill Bletsos, Βασίλης Μπλέτσος, Βασίλειος Μπλέτσος, Software Engineer Greece, Satori, Ecodevelopment, Certh, Fieldscale" />
        <meta name="author" content="Vasilis Mpletsos" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet"/>
      </Head>
      <ResponsiveAppBar />
      <Chat />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        {renderContent()}
      </div>
    </>
  );
}
