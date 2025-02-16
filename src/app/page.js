import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-6">
        <div
          className="h-64 rounded-md overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Laptops</h2>
              <p className="mt-2 text-gray-400">
                Laptops de alto rendimiento, ideales para trabajo, estudios o
                entretenimiento.
              </p>
              <Link
                className="flex items-center w-36 h-8 mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                href="/catalog/Laptops"
              >
                <span>Comprar</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fillRule="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:flex mt-8 md:-mx-4">
          <div
            className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Periféricos
                </h2>
                <p className="mt-2 text-gray-400">
                  Accesorios que mejoran tu productividad y confort. Desde
                  teclados y ratones hasta auriculares, todo para complementar
                  tu setup.
                </p>
                <Link
                  href="catalog/Perifericos"
                  className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                >
                  <span>Comprar</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fillRule="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Monitores</h2>
                <p className="mt-2 text-gray-400">
                  Monitores con excelente resolución y colores vibrantes,
                  perfectos para cualquier tarea o momento de entretenimiento.
                </p>
                <Link
                  href="catalog/Monitores"
                  className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                >
                  <span>Comprar</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fillRule="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
