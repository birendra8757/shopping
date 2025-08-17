import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import { Fragment } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SearchResults from "./components/product/SearchResults";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Fragment>
        <Header />
      <div className="md:mx-[120px] mt-[70px]">
           <ScrollToTop />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/product/:name" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
     
      </div>
       <Footer />
    </Fragment>
  );
}

export default App;
