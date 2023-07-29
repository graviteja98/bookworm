import React from "react";
import Appbar from "./components/Appbar";
import myTheme from "./theme";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; // Make sure to use BrowserRouter as Router
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import { ThemeProvider } from "@emotion/react";
import DFY from "./components/DFY";


const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const Blog = lazy(() => import("./components/Blog"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const MyCollections = lazy(() => import("./components/MyCollections"));
const Editors = lazy(()=>import("./components/Editors"))
function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        {" "}
        {/* Use BrowserRouter as Router */}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Appbar />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            
            <Route path="home" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
            <Route path="home/collections" element={<Suspense fallback={<Loading />}><MyCollections /></Suspense>} />
            <Route path="home/dfy" element={<Suspense fallback={<Loading />}><DFY /></Suspense>} />
            <Route path="collections" element={<Suspense fallback={<Loading />}><MyCollections /></Suspense>} />
            <Route path="dfy" element={<Suspense fallback={<Loading />}><DFY /></Suspense>} />
            <Route path="editors" element={<Suspense fallback={<Loading />}><Editors /></Suspense>} />
            <Route path="home/editors" element={<Suspense fallback={<Loading />}><Editors /></Suspense>} />
            <Route
              path="about"
              element={
                <Suspense fallback={<Loading />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="portfolio"
              element={
                <Suspense fallback={<Loading />}>
                  <Portfolio />
                </Suspense>
              }
            />
            <Route
              path="blog"
              element={
                <Suspense fallback={<Loading />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
