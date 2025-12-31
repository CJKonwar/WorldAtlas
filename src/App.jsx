import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Pages/Home.jsx";
import { About } from "./Pages/About.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { Country } from "./Pages/Country.jsx";  

import { AppLayout } from "./components/layout/AppLayout.jsx";
import { ErrorPage } from "./Pages/ErrorPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country",
        element: <Country/>,
      }
    ]
  }
]);





export const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
}