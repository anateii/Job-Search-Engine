import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeSearch from "./components/HomeSearch/HomeSearch.jsx"
import CompanyDetails from "./components/CompanyDetails/CompanyDetails.jsx"
import Favourites from "./components/Favourites/Favourites"
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import MyNavbar from './components/Navbar/MyNavbar.jsx';


function App() {
  return (
    <Provider store= {configureStore}>
      <BrowserRouter>
      <MyNavbar />
        <Routes>
          <Route path="/" element={<HomeSearch />} />
          <Route path="/:company" element={<CompanyDetails />} /> 
          <Route path="/favourites" element={<Favourites />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
