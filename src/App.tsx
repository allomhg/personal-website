import CssBaseline from "@mui/material/CssBaseline";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavTabs } from "./components/NavTabs";
// import { Footer } from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import "./App.css";

function App() {
  const theme = createTheme({
    // typography: {
    //   fontFamily: [
    //     "Works Sans",
    //     "sans-serif",
    //   ],

    // },

    palette: {
      background: {
        // default: "red"
      },
      primary: deepOrange
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavTabs />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
