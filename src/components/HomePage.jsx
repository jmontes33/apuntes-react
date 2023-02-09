import React from "react";

function HomePage() {
  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mt-3">
                <p className="w-2/3 text-left text-lg">
                React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para crear interfaces de usuario. Permite a los desarrolladores crear componentes de la interfaz de usuario (como botones, menús, etc.) y renderizarlos en la página web de manera eficiente. Esto significa que si se actualiza alguna parte de la interfaz, solo se vuelve a renderizar esa parte específica en lugar de toda la página. Esto hace que las aplicaciones construidas con React sean más rápidas y fáciles de mantener.
                </p>
                <img src="src\assets\react-logo.png" alt="react" className="w-1/5"/>
            </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
