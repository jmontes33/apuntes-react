import React from "react";
import { NavLink } from "react-router-dom";

function Section3() {
  return (
    <div className="flex flex-col just mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start">
        {" "}
        <NavLink class="hover:underline text-left mb-8" to="/">
          ← Volver al inicio
        </NavLink>
      </div>
      <h1 className="text-6xl text-left font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
        Estructura del proyecto
      </h1>
      <div className="text-left text-xl">
        <div className="flex justify-around items-center my-5">
          <p className="mb-3 w-1/3">
            La imagen de la izquierda es lo que ha generado el comando que
            previamente hemos introducido. <br />
            <br /> La carpeta "src" es la carpeta más importante, ya que es
            donde vamos a desarrollar el código, html, css, javascript... <br />
            <br /> la carpeta "public" contiene los recursos estáticos de la
            aplicación, como imágenes, archivos de estilo y el archivo
            "index.html" que es la página principal de la aplicación.
          </p>
          <img src="https://github.com/jmontes33/apuntes-react/blob/main/src/assets/Estructura%20Rect.png?raw=true" alt="react-structure" />
        </div>
        <p className="mb-3">
          Lo de debajo es el index.html que hay dentro de la carpeta public, su
          estructura es muy parecida a la de un index.html normal, lo más
          importante de este archivo es la línea del div ID root, básicamente
          dentro de este div es donde se va a cargar toda la aplicación. La
          carpeta "node_modules" contiene todas las dependencias (librerías y
          paquetes) que se utilizan en la aplicación. Y por último también
          tenemos los Json, el archivo "package.json" en una aplicación de React
          es un archivo de configuración que contiene información sobre la
          aplicación, como el nombre, la versión, la descripción y las
          dependencias necesarias para ejecutar la aplicación...
        </p>
        <div className="flex justify-center my-5">
          <img src="https://github.com/jmontes33/apuntes-react/blob/main/src/assets/html%20estructura.png?raw=true" alt="html-structure" />
        </div>
      </div>
      <div className="flex justify-between mt-10">
      <NavLink className="font-semibold text-lg" to="/create-react-app">
        ← Create-react-app
        </NavLink>
        <NavLink className="font-semibold text-lg" to="/hola-mundo">
          Hola Mundo →
        </NavLink>
      </div>
    </div>
  );
}

export default Section3;
