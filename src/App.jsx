import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Skeleton from "./components/Skeleton/Skeleton";

const Home = lazy(() => import("./Pages/Home/Home"));
const About =lazy(()=> import ("./components/About/About"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Skills =lazy(()=> import ("./Pages/Skills/Skills"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const NotFound =lazy(()=> import ("./Pages/NotFound/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton/>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route
path="*"
element={<NotFound/>}
/>
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;