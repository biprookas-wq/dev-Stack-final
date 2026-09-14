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
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <h2 className="text-2xl font-semibold text-slate-600">
              Loading...
            </h2>
          </div>
        }
      >
        <Cards cardsPromise={cardsPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
