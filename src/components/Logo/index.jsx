import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import LogoImg from "../../assets/logo.svg";
import LogoDarkImg from "../../assets/logo-dark.svg";

const Logo = () => {
  const [theme, setTheme] = useState("light");

  const handleSystemThemeChange = (event) => {
    const newTheme = event.matches ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const initialTheme = prefersDarkMode.matches ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );
    }

    prefersDarkMode.addListener(handleSystemThemeChange);

    return () => prefersDarkMode.removeListener(handleSystemThemeChange);
  }, []);

  return (
    <div className="pl-[32px] flex items-center">
      <Link to="/" className="inline-block">
        <img src={theme === "dark" ? LogoDarkImg : LogoImg} alt="logo-img" />
      </Link>
      <button
        onClick={toggleTheme}
        className="dark:bg-[red] hover:bg-[#E0E7EE] ml-[25px] text-[25px] flex items-center justify-center w-[40px] h-[40px] rounded-full"
      >
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default Logo;
