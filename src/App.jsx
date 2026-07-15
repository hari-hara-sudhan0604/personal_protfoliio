import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Skeleton from "./components/Skeleton/Skeleton";

const Home = lazy(() => import("./pages/Home/Home"));
const About =lazy(()=> import ("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Skills =lazy(()=> import ("./pages/skills/Skills"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound =lazy(()=> import ("./pages/NotFound/NotFound"));

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