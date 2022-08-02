import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IconAndroid } from "../components/Icons/IconAndroid";
import { IconApple } from "../components/Icons/IconApple";
import { Ornament } from "../components/Ornament";
import { OrnamentCard } from "../components/OrnamentCard";

import style from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Equalizer</title>
        <meta name="description" content="Equalizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={style.ornamentContainer}>
        <Ornament />
      </div>
      <section className={style.apresentation}>
        <h1>We make your music sound extraordinary.</h1>
        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </section>
      <section className={style.price}>
        <div className={style.ornamentCardContainer}>
          <OrnamentCard />
        </div>
        <div className={style.appImage}>
          <Image
            src="/illustration-app.png"
            layout="fill"
            alt="equalizer image app"
          />
        </div>
        <div className={style.cardPrices}>
          <h2>Premium EQ</h2>
          <p>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <span>
            $4 <span>/month</span>
          </span>
          <button>
            <IconApple /> iOS Download
          </button>
          <button>
            <IconAndroid />
            Android Download
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
