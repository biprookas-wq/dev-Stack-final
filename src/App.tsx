import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Cards from "./components/cards/Cards";

import { Suspense } from "react";
import type { Icard } from "./Types/card";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";


const cardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const cardsPromise = cardsFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Cards cardsPromise={cardsPromise} />
      </Suspense>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
