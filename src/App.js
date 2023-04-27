import { Container } from "react-bootstrap";
import "./App.css";
import FirstFold from "./components/Firstfold/Firstfold";
import BrandNav from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrandNav></BrandNav>

      <FirstFold></FirstFold>
    </div>
  );
}

export default App;
