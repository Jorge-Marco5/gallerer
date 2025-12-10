import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Compass, Folder, Upload, ShoppingCart } from "lucide-react";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { icon: Compass, title: "Discover", path: "#images" },
    { icon: Folder, title: "Collections", path: "javascript:void(0)" },
    { icon: Upload, title: "Upload", path: "javascript:void(0)" },
    { icon: ShoppingCart, title: "Shop", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e: any) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`absolute top-0 w-screen z-50 transition-all duration-500 ease-in-out text-neutral-900 dark:text-white md:text-sm backdrop-blur-[10px] ${
        state
          ? "shadow-lg rounded-xl border-none md:shadow-none md:border-none"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen mx-auto md:flex px-4">
        <div className="flex items-center justify-between py-5 px-4 md:py-5 md:block">
          <a href="javascript:void(0)">
            <div className="flex items-center justify-center">
              <img
                src="Gallerer.svg"
                alt="Gallerer"
                className="h-10 dark:invert"
                loading="eager"
              />
              <h1 className="ml-2 text-2xl font-bold sm:text-2xl md:text-2xl">
                Gallerer
              </h1>
            </div>
          </a>
          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800 dark:text-gray-400"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 z-50 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          } `}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 hover:text-gray-500 dark:text-gray-200 transition-all duration-500 ease-in-out flex items-center"
                >
                  <a href={item.path} className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <ThemeToggle />
            <a
              href="javascript:void(0)"
              className="pointer-events-none block text-gray-500 hover:text-gray-800 dark:text-gray-400"
            >
              Log in
            </a>
            <a
              href="javascript:void(0)"
              className="pointer-events-none flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Sign in
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
