import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeSearch from "./components/HomeSearch/HomeSearch.jsx"
import CompanyDetails from "./components/CompanyDetails/CompanyDetails.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSearch />} />
        <Route path="/:company" element={<CompanyDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
