import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Create from "./components/Create";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>{" "}
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
