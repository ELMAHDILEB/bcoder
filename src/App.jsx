import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
import "./index.css"
export default function App() {

  const pathElement = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/contact", element: <Contact /> },
  ]

  return (
   <Suspense fallback={<div>Loading...</div>}>
     <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >
      <Navbar />


      <section className="w-full md:w-[80%] calcHeight mx-auto ">
        <Routes>
          {pathElement.map((to, index) => ( 
            <Route key={index} path={to.path} element={to.element} />
          ))}
        </Routes>

      </section>

    </Router>
   </Suspense>
  )
}