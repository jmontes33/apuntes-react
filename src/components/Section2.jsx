import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

function CodeBlock({ code, language }) {
  const codeRef = useRef(null);
  useEffect(() => {
    hljs.highlightBlock(codeRef.current);
  }, []);
  const styles = `bg-blue-200 rounded-xl ${language}`;

  return (
    <pre>
      <code ref={codeRef} className={styles}>
        {code}
      </code>
    </pre>
  );
}

function Section2() {
  return (
    <div className="flex flex-col just mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start">
        {" "}
        <NavLink className="hover:underline text-left mb-8" to="/">
          ← Volver al inicio
        </NavLink>
      </div>
      <h1 className="text-6xl text-left font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
        Create-react-app
      </h1>
      <div className="text-left text-xl">
        <p className="mb-5">
          Para crear un proyecto de react lo primero que debes hacer es crear
          una carpeta donde lo vayas a guardar (yo la llamaré mi primera app con
          react), después abre Visual Studio Code y accede a esta carpeta. Ahora
          abre una terminal con VS Code, para ello ve al menú superior
          izquierdo, haz clic en "Terminal" y "New Terminal" (yo lo tengo en
          inglés, tal vez a tu lo tengas en Español). Se habrá abierto una
          terminal en la parte inferior de la pantalla, asegúrate de que está
          situada en la carpeta que creaste, en mi caso, "Mi primera app con
          react". Ahora ejecuta el siguiente comando:
        </p>
        <CodeBlock
          code={`npx create-react-app my-first-react-app`}
          language="javascript"
        />
        <p className="my-5">
          Npx es una herramienta de línea de comandos que viene con Node.js,
          "create-react-app" nos permite crear el proyecto react, seguidamente
          debes escribir el nombre que le quieres dar al proyecto, es importante
          que este no tenga espacios, puedes escribir guiones para separar las
          palabras. Una vez ejecutado el comando empezará a crearse el proyecto,
          esto puede tardar algunos minutos. Cuando haya terminado, desplázate
          en la terminal a la carpeta que se ha creado, para ello puedes
          ejecutar el siguiente comando:
        </p>
        <CodeBlock
          code={`cd "nombre de la carpeta"`}
          language="javascript"
        />
        <p className="my-5">Y ahora:</p>
        <CodeBlock
          code={`npm start`}
          language="javascript"
        />
        <p className="my-5">
          Este comando es utilizado para iniciar un servidor de desarrollo en un
          equipo local y así poder ejecutar la aplicación react en un navegador,
          utilizando este comando podrás ver y probar la aplicación en tu equipo
          antes de implementarla en un servidor en producción. Ahora puedes ver
          tu proyecto de react en tu navegador, vaya momento más mágico.
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <NavLink className="font-semibold text-lg" to="/introduccion">
        ← Introducción
        </NavLink>
        <NavLink className="font-semibold text-lg" to="/estructura-del-proyecto">
          Create-react-app →
        </NavLink>
      </div>
    </div>
  );
}

export default Section2;
