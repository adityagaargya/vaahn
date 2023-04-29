import { Container } from "react-bootstrap";
import "./App.css";
import FirstFold from "./components/Firstfold/Firstfold";
import BrandNav from "./components/Navbar/Navbar";
import Secondfold from "./components/Secondfold/Secondfold";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import CreateNFT from "./components/CreateNFT/CreateNFT";

function App() {
  return (
    <div className="App">
      <BrandNav></BrandNav>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage></Landingpage>}></Route>
          <Route path="/create" element={<CreateNFT></CreateNFT>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
