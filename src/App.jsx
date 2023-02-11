import "./App.css";
import GithubButton from "./components/GithubButton";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterBar from "./components/FooterBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section13 from "./components/Section13";
import Section14 from "./components/Section14";


function App() {
  return (
    <BrowserRouter>
      <GithubButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/introduccion" element={<Section1 />} />
        <Route path="/create-react-app" element={<Section2 />} />
        <Route path="/estructura-del-proyecto" element={<Section3 />} />
        <Route path="/hola-mundo" element={<Section4 />} />
        <Route path="/componentes" element={<Section6 />} />
        <Route path="/tu-primer-componente" element={<Section7 />} />
        <Route path="/jsx" element={<Section8 />} />
        <Route path="/react-props" element={<Section9 />} />
        <Route path="/props-types" element={<Section10 />} />
        <Route path="/estilos-react" element={<Section11 />} />
        <Route path="/event-handlers" element={<Section12 />} />
        <Route path="/arrays-react" element={<Section13 />} />
        <Route path="/hooks" element={<Section14 />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;
