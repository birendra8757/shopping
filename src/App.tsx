import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Fragment } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SearchResults from "./components/product/SearchResults";

function App() {
  return (
    <Fragment>
        <Header />
      <div className="md:mx-[120px] mt-[70px]">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
      </div>
    </Fragment>
  );
}

export default App;
