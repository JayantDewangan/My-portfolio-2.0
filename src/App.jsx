import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contacts";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";
import GithubStats from "./components/GithubStats/GithubStats";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import CatchTheBugs from "./components/Game/CatchTheBugs";

function App() {
  const [isBugGamePlaying, setIsBugGamePlaying] = React.useState(false);

  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-[#050414] min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
        
        <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%'}}/>

        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        ></div>

        <div className="relative pt-20">
          <Navbar onStartBugGame={() => setIsBugGamePlaying(true)} />
          <About />
          <AboutMe />
          <Skills />
          <Work />
          <GithubStats />
          <Education />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>

        {/* Global Bug Game Overlay */}
        <CatchTheBugs 
          isPlaying={isBugGamePlaying} 
          onGameOver={() => setIsBugGamePlaying(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
