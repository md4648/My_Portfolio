import { useState ,useEffect} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
      hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
   const [darkMode, setDarkMode] = useState(true);

  const isAboveSmallScreens = useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-gray-100 dark:bg-light-blue";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };


  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6 transition`}>
      <div className="flex items-center justify-between mx-auto w-5/6">

        {/* LOGO */}
        <h4 className="font-playfair text-5xl md:text-2xl font-bold">
          <a href="#home">MD</a>
        </h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex items-center gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectPage={setSelectPage} />
            <Link page="Skills" selectedPage={selectedPage} setSelectPage={setSelectPage} />
            <Link page="Experiance" selectedPage={selectedPage} setSelectPage={setSelectPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectPage={setSelectPage} />
            <Link page="Testemonial" selectedPage={selectedPage} setSelectPage={setSelectPage} />
            <Link page="Contact" selectedPage={selectedPage} setSelectPage={setSelectPage} />

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className="text-xl ml-4 hover:scale-110 transition"
            >
              {/* {darkMode ? "☀️" : "🌙"} */}
            </button>
          </div>
        ) : (
          <button
            className="rounded-full p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img className="w-16" src="assets/menu-icon.svg" alt="Menu" />
          </button>
        )}

        {/* MOBILE MENU */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-white dark:bg-black w-[300px] transition">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img className="w-16" src="assets/close-icon.svg" alt="Close" />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-4xl">
              <Link page="Home" selectedPage={selectedPage} setSelectPage={setSelectPage} />
              <Link page="Skills" selectedPage={selectedPage} setSelectPage={setSelectPage} />
              <Link page="Experiance" selectedPage={selectedPage} setSelectPage={setSelectPage} />
              <Link page="Projects" selectedPage={selectedPage} setSelectPage={setSelectPage} />
              <Link page="Testemonial" selectedPage={selectedPage} setSelectPage={setSelectPage} />
              <Link page="Contact" selectedPage={selectedPage} setSelectPage={setSelectPage} />

              {/* <button
                onClick={toggleTheme}
                className="text-xl mt-10"
              >
                {darkMode ? "☀ Switch Light" : "🌙 Switch Dark"}
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;