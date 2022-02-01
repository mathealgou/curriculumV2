import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { Contact } from "./views/Contact";
import { Blog } from "./views/Blog";
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
            { name: "Contact me", path: "contact" },
            { name: "Blog", path: "blog" },
          ],
        }}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
