import type { FC } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import LocaleProvider from "./i18n/LocaleProvider";
import { useLocale } from "./i18n/context";
import SmoothScroll from "./components/layout/SmoothScroll";
import TimeGrid from "./components/seismo/TimeGrid";
import RegisterRail from "./components/layout/RegisterRail";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Trajectory from "./sections/Trajectory";
import Projects from "./sections/Projects";
import Instruments from "./sections/Instruments";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

const Sheet: FC = () => {
  const { t } = useLocale();
  const reduced = useReducedMotion();

  // The drum turning. Scroll advances the record, so the sheet it is written
  // on slides under the pen — one transform, the whole page, and the reason
  // the registers read as one machine rather than six stacked blocks.
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], ["0%", "-6.5%"]);

  return (
    <>
      <a
        href="#perfil"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-bone focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        {t.a11y.skip}
      </a>

      <TopBar />
      <RegisterRail />

      {/* The sheet the whole record is written on, foot included. It runs wider
          than the viewport so the drift never exposes an edge, and clips on the
          x axis so the slack never becomes a scrollbar. */}
      <div className="relative overflow-x-clip">
        <motion.div
          className="absolute -inset-x-[9%] inset-y-0 -z-10"
          style={reduced ? undefined : { x: drift }}
          aria-hidden="true"
        >
          <TimeGrid className="absolute inset-0" quiet />
        </motion.div>

        <main>
          <Hero />
          <Profile />
          <Trajectory />
          <Projects />
          <Instruments />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

const App: FC = () => (
  <LocaleProvider>
    <SmoothScroll>
      <Sheet />
    </SmoothScroll>
  </LocaleProvider>
);

export default App;
