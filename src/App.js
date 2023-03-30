import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import CalculatorPage from './components/CalculatorPage/CalculatorPage';
import Blog from './components/BlogPage/Blog';
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>

      <Navbar ></Navbar>
      <div style={{ margin: "0", width: "100%" , height:"100%"}}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/analysis" element={<CalculatorPage/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
