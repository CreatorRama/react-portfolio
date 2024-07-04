import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
// import Home from "../components/Home";
// import Contact from "../components/Contact";
// import About from "../components/About";
// import Portfolio from "../components/Portfolio";
// import Error from "./components/Error";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             // { path: "/", element: <Home /> },
//             // { path: "/contact", element: <Contact /> },
//             // { path: "/about", element: <About /> },
//             // { path: "/portfolio", element: <Portfolio /> },
//             // { path: "*", element: <Error /> },
//         ]
//     }
// ]);

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
