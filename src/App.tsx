import type { FC } from "react";
import LocaleProvider from "./i18n/LocaleProvider";
import { useLocale } from "./i18n/context";
import { CONTAINER } from "./lib/layout";
import Header from "./components/ink/Header";
import Sidebar from "./components/ink/Sidebar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Trajectory from "./sections/Trajectory";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

const Page: FC = () => {
  const { t } = useLocale();

  return (
    <>
      <a
        href="#perfil"
        className="mono-label sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-night"
      >
        {t.a11y.skip}
      </a>
      <Header />
      <main>
        <Hero />
        {/* Below the cover: the index sticks in the left column while the
            sections scroll in the right one. */}
        <div className={`grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16 ${CONTAINER}`}>
          <Sidebar />
          <div className="min-w-0">
            <Profile />
            <Trajectory />
            <Projects />
            <Stack />
            <Certifications />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const App: FC = () => (
  <LocaleProvider>
    <Page />
  </LocaleProvider>
);

export default App;
