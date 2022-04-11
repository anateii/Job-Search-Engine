import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeSearch from "./components/HomeSearch/HomeSearch.jsx";
import CompanyDetails from "./components/CompanyDetails/CompanyDetails.jsx";
import Favourites from "./components/Favourites/Favourites";
import MyNavbar from "./components/Navbar/MyNavbar.jsx";
import MyFooter from "./components/Footer/MyFooter";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomeSearch />} />
        <Route path="/:company" element={<CompanyDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <MyFooter/>
    </BrowserRouter>
  );
}

export default App;
