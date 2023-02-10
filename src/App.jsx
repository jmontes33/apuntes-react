import "./App.css";
import GithubButton from "./components/GithubButton";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <BrowserRouter>
      <GithubButton />
      <HomePage />
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
