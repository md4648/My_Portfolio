import Contacts from "./scenes/Contact";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Design from "./scenes/Design";
import Footer from  "./scenes/Footer"
import Testemonials from "./scenes/Testemonials";

import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import React, { useEffect, useState } from "react";
import UseMediaQuery from "./hooks/useMediaQuery";
import MyEducation from "./scenes/MyEducation";

function App() {
  const [selectedPage, setSelectPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = UseMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectPage={setSelectPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectPage={setSelectPage} />
        )}

        <Landing setSelectPage={setSelectPage} />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <MyEducation />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient />


      <div className="w-5/6 mx-auto">
        <Design />
      </div>

      <LineGradient />


      <div className="w-5/6 mx-auto md:h-full">
        <Testemonials />
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
         <Contacts />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
