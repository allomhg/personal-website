import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavTabs } from "./components/NavTabs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <NavTabs />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
