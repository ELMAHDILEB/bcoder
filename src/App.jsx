import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));


export default function App() {



  const pathElement = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <PageNotFound /> },
  ]

  return (
    <HelmetProvider>
     <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }} >

       

        <Routes>
        <Route element={<MainLayout/>} >
          {pathElement.map((to, index) => ( 
            <Route key={index} path={to.path} element={to.element} />
          ))}
          </Route>
        </Routes>

      
    </Router>
    </HelmetProvider>
)
}


