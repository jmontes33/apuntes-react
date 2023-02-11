import React from "react";
import { NavLink } from "react-router-dom";

const posts = [
  {
    title: "Introduccion",
    href: "/introduccion",
    description:
      "Para poder utilizar React necesitaremos tener instalado node.js en nuestro equipo y también un IDE, yo personalmente utilizo VS Code.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Create-react-app",
    href: "/create-react-app",
    description:
      "Para crear un proyecto de react lo primero que debes hacer es crear una carpeta donde lo vayas a guardar (yo la llamaré mi primera app con react), después abre Visual Studio Code y accede a esta carpeta.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Estructura del proyecto",
    href: "/estructura-del-proyecto",
    description:
      "La estructura del proyecto es la organización de los componentes, archivos y directorios que componen la aplicación. La estructura adecuada de un proyecto depende en gran medida del tamaño y la complejidad de la aplicación.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Hola Mundo en React",
    href: "/hola-mundo",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Componentes en React",
    href: "/componentes",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Tu primer componente",
    href: "/tu-primer-componente",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "JSX",
    href: "/jsx",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "React props",
    href: "/react-props",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Prop-Types",
    href: "/props-types",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Estilos en React",
    href: "/estilos-react",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Event Handlers",
    href: "/event-handlers",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Arrays en React",
    href: "/arrays-react",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
  {
    title: "Hooks de React",
    href: "/hooks",
    description:
      "La imagen de la izquierda es lo que ha generado el comando que previamente hemos introducido.",
    imageUrl: "/src/assets/react-img-std.png",
  },
];

function Articles(props) {
  const filteredData = posts.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });

  return (
    <div className="relative pt-16 pb-20 lg:pt-12 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contenido
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {filteredData.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex flex-col justify-between">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="text-left mt-3 text-base text-gray-500 items-center">
                    {post.description}
                  </p>
                </div>
              </div>
              <NavLink to={post.href}>
                <p className="flex justify-center h-10 items-center font-semibold text-gray-900">
                  Leer más
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
