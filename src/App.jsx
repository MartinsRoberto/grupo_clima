import { Outlet } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div style={{marginTop: "58px"}}></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
