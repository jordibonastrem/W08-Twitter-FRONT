import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Owl Bird</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className={styles.title}>OWL BIRD</h1>
      <Link href="/dashboard" passHref>
        <div className={styles.grid}>
          <a className={styles.card}>START</a>
        </div>
      </Link>
    </main>
  </div>
);

export default Home;
