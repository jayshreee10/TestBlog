import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./Blogs"; // Create a new component for Blogs

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div style={{ height: "100vh", width: "100vw" }}>hello</div>}
        />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
