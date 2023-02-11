import React from "react";
import Articles from "./Articles";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
          Apuntes React
        </h1>
        <div className="flex justify-between items-center mt-3 mb-14">
          <p className="w-2/3 text-left text-lg">
            <strong>React es una biblioteca de JavaScript desarrollada por Facebook que
            se utiliza para crear interfaces de usuario.</strong> Permite a los
            desarrolladores crear componentes de la interfaz de usuario (como
            botones, menús, etc.) y renderizarlos en la página web de manera
            eficiente. Esto significa que si se actualiza alguna parte de la
            interfaz, solo se vuelve a renderizar esa parte específica en lugar
            de toda la página. Esto hace que las aplicaciones construidas con
            React sean más rápidas y fáciles de mantener.
          </p>
          <img src="https://github.com/jmontes33/apuntes-react/blob/main/src/assets/react-logo.png?raw=true" alt="react" className="w-1/5" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default HomePage;
