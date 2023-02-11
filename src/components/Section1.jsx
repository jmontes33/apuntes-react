import React from "react";
import { NavLink } from "react-router-dom";

function Section1() {
  return (
    <div className="flex flex-col just mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start">
        {" "}
        <NavLink class="hover:underline text-left mb-8" to="/">
          ← Volver al inicio
        </NavLink>
      </div>
      <h1 className="text-6xl text-left font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
        Introduccion
      </h1>
      <div className="text-left text-xl">
        <h2 className="text-2xl text-pink-500 mb-5 font-bold">
          ¿Qué necesitas para empezar a utilizar REACT?
        </h2>
        <p className="mb-3">
          Para poder utilizar React necesitaremos tener instalado node.js en
          nuestro equipo y también un IDE, yo personalmente utilizo VS Code.
        </p>
        <div className="flex justify-center">
          <h3 className="text-center mb-5 p-2 w-1/2 font-bold text-2xl border-b-4 border-indigo-500">
            Node.js
          </h3>
        </div>
        <p className="mb-3">
          Node.js es un entorno de ejecución de JavaScript que permite a los
          desarrolladores ejecutar código JavaScript en un servidor en lugar de
          en un navegador. Esto significa que puedes crear aplicaciones web
          completas utilizando solo JavaScript. Node.js es utilizado
          principalmente para crear aplicaciones de servidor que se ejecutan en
          un sistema operativo y pueden interactuar con el sistema de archivos,
          realizar peticiones HTTP y manejar bases de datos. Para su instalación
          debes dirigirte a{" "}
          <a className="text-blue-400" href="https://nodejs.org/en/">
            https://nodejs.org/en/
          </a>{" "}
          y descargar la versión LTS, también puedes descargar la versión actual
          si lo prefieres, pero la versión LTS suele ser más estable y nos
          servirá perfectamente. Una vez instalado puedes ir a la consola y
          escribir node --version (en windows) para ver si se ha instalado
          correctamente.
        </p>
        <div className="flex justify-center">
          <h3 className="text-center mb-5 p-2 w-1/2 font-bold text-2xl border-b-4 border-indigo-500">
            Visual Studio Code
          </h3>
        </div>
        <p>
          Visual Studio Code es un editor de código fuente desarrollado por
          Microsoft para Windows, Linux y macOS. Es gratuito y de código
          abierto, lo que significa que cualquiera puede descargarlo e
          utilizarlo. Se utiliza para escribir y editar código fuente de
          diferentes lenguajes de programación, como JavaScript, Python, C++,
          entre otros. En resumen, es una herramienta que permite escribir y
          editar código de forma ordenada y fácil de entender, con diversas
          funcionalidades y posibilidades de personalización. Para instalarlo
          tan solo debes dirigirte al siguiente enlace{" "}
          <a href="https://code.visualstudio.com/" className="text-blue-400">
            https://code.visualstudio.com/
          </a>{" "}
          y descargar el ejecutable, su instalación es muy sencilla e intuitiva.
          Una vez instalado puedes instalar extensiones que te permitan ser más
          productivo a la hora de escribir código, te recomiendo las siguientes.
          Prettier. Material Icon Theme.
        </p>
      </div>
      <div className="flex justify-end mt-10">
        <NavLink className="font-semibold text-lg" to="/create-react-app">
          Create-react-app →
        </NavLink>
      </div>
    </div>
  );
}

export default Section1;
