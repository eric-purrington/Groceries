import React from "react";
import Header from "./components/Header";
import Groceries from "./components/Groceries";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
        <Header />
        <Groceries />
        <Footer />
    </div>
  );
}
