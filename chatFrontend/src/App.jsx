import react from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Chat />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </HashRouter>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
