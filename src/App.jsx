import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./components/home/Home";
import {createBrowserRouter, ScrollRestoration, Outlet, RouterProvider} from "react-router-dom"
import Navlinks from "./components/home/header/sub-component/Navlinks";
import Footer from "./components/footer/Footer";
<<<<<<< HEAD
import Travel from "./components/travel/Travel";
=======
import Faq from "./components/faq/Faq";
>>>>>>> e7f80479a6c6b0a944e89766aefd5ea1ce75ce1b

const Layout = () => {
  return (
    <div className="max-w-[1200%]">
      <Navlinks/>
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
<<<<<<< HEAD
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/travel",
        element: <Travel />,
      },
=======
      { path: '/', element: <Home /> },
      { path: 'aboutus', element: <AboutUs /> },
      { path: 'faq', element: <Faq /> },
>>>>>>> e7f80479a6c6b0a944e89766aefd5ea1ce75ce1b
    ],
  },
]);

function App () {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
