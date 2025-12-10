import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  useEffect(() => {
    // Sync with DOM on mount in case inline script ran first
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label htmlFor="theme-toggle" className="flex items-center cursor-pointer z-50">
      <div className="relative">
        <input
          type="checkbox"
          id="theme-toggle"
          className="peer sr-only"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="block w-14 h-8 bg-gray-300 rounded-full peer-checked:bg-blue-600 dark:bg-gray-700 dark:peer-checked:bg-indigo-500 transition-colors duration-200 ease-in-out"></div>
        <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out transform peer-checked:translate-x-full"></div>
      </div>
      <span className="ml-3 text-gray-900 dark:text-gray-100 font-medium">
        {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
      </span>
    </label>
  );
};
