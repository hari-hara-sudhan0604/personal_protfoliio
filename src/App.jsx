import { Routes, Route,useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Skeleton from "./components/Skeleton/Skeleton";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./Pages/Home/Home"));
const About =lazy(()=> import ("./components/About/About"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Skills =lazy(()=> import ("./Pages/Skills/Skills"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const NotFound =lazy(()=> import ("./Pages/NotFound/NotFound"));
const Education = lazy(() =>import("./Pages/Education/Education"));
const Experience = lazy(()=>import("./Pages/Experience/Experience"));
const Certificates = lazy(() =>import("./Pages/Certificates/Certificates"));

function App() {
  const location=useLocation();
  return (
    
      <Suspense fallback={<Skeleton/>}>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />}/>
          <Route path="/experience"element={<Experience/>}/>
          <Route path="/certificates"element={<Certificates />}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
      </AnimatePresence>
      </Suspense>

  );
}

export default App;