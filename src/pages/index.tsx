import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const algorithms = [
    "SIDH",
    "Kyber",
    "Dilithium",
    "Falcon",
  ]
  return (
    <>
      <Head>
        <title>Kuantun Kompare</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h1 className="text-6xl font-bold text-gray-800">Welcome to Kuantum Kompare</h1>
        <p className="mt-12">
          Kuantum Kompare is a website that compares the performance of quantum algorithms.
          Please select an algorithm to begin.
        </p>
      </>
    </>
  );
};

export default Home;
