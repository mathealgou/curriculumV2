import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import "./index.scss";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar
        props={{
          links: [
            { name: "Home", path: "/" },
            { name: "My projects", path: "projects" },
          ],
        }}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
