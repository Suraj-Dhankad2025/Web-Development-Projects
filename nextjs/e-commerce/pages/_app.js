import "../styles/globals.css";
import Navbar from "../components/navbar";
import Theme from "../components/theme";
// import React,{useState} from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Theme /> */}
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
