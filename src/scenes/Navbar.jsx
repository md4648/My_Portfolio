import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
           hover:text-yellow transition duration-500
            `}
      href={`#${lowerCasePage}`}
       onClick={() => setSelectPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};


const Navbar = ({isTopOfPage, selectedPage, setSelectPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground=isTopOfPage?"":"bg-light-blue"

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold"><a href="#home">MD</a></h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className=" flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Link
              page="Testemonial" 
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectPage={setSelectPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="assets/menu-icon.svg" alt="Menu" />
          </button>
        )}
        {/* Mobile menu POPUP */}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-black w-[300px]">
            {/* CLOSE Icon */}
            <div className="flex justify-end p-12  ">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                {/* <i class="fa-solid fa-xmark text-white  hover:text-yellow transition duration-500"></i> */}
                <img src="assets/close-icon.svg" alt="Menu" />
              </button>
           </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-white">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectPage={setSelectPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectPage={setSelectPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectPage={setSelectPage}
              />
              <Link
                page="Testemonial"
                selectedPage={selectedPage}
                setSelectPage={setSelectPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectPage={setSelectPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;