import Home from ".";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="layout">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
