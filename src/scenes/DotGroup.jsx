import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6
      before:rounded-full before:border-2 before:border-yellow before:left-[-50%]
      before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyles : "bg-dark-gray"}
             w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-gray"
        }
             w-3 h-3 rounded-full`}
        href="#skills"
        onClick={() => setSelectPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-gray"
        }
             w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectPage("projects")}
      />

      <AnchorLink
        className={`${
          selectedPage === "testemonial" ? selectedStyles : "bg-dark-gray"
        }
             w-3 h-3 rounded-full`}
        href="#testemonial"
        onClick={() => setSelectPage("testemonial")}
      />

      <AnchorLink
        className={`${
          selectedPage === "design" ? selectedStyles : "bg-dark-gray"
        }
             w-3 h-3 rounded-full`}
        href="#design"
        onClick={() => setSelectPage("design")}
      />

      <AnchorLink
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-gray"
        }
             w-3 h-3 rounded-full`}
        href="#contact"
        onClick={() => setSelectPage("contact")}
      />
    </div>
  );
};

export default DotGroup;
