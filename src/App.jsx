import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
