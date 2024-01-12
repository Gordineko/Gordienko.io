import React, { useEffect, useState } from "react";
import Header from "./pages/Header";
import "./landing.css";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Loader from "./Loader";
function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

export default Landing;
