import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import Impact from "./pages/Impact";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Research from "./pages/Research";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "ventures", Component: Ventures },
      { path: "impact", Component: Impact },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "gallery", Component: Gallery },
      { path: "research", Component: Research },
    ],
  },
]);
