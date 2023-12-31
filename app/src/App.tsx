import "./styles.css";
import "./fonts.css";

import LeafygreenProvider from '@leafygreen-ui/leafygreen-provider';
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Patient from "./pages/Patient";


function App() {
  return (
    <LeafygreenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/patient" element={<Patient />} />
          </Route>
        </Routes>
      </Router>
    </LeafygreenProvider>
  );
}

export default App;