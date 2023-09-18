import "./styles.css";
import "./fonts.css";

import LeafygreenProvider from '@leafygreen-ui/leafygreen-provider';
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Patient from "./pages/Patient";
import Login from "./pages/Login";


function App() {
  return (
    <LeafygreenProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route path="/dashboard/" element={<Home />} />
            <Route path="/dashboard/create" element={<Create />} />
            <Route path="/dashboard/patient" element={<Patient />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </LeafygreenProvider>
  );
}

export default App;