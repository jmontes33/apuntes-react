import "./App.css";
import GithubButton from "./components/GithubButton";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <GithubButton />
      <SearchBar />
      <HomePage />
      
    </BrowserRouter>
  );
}

export default App;
