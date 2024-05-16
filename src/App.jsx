import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./components/home/Home";
import {createBrowserRouter, ScrollRestoration, Outlet, RouterProvider} from "react-router-dom"
import Navlinks from "./components/home/header/sub-component/Navlinks";
import Footer from "./components/footer/Footer";

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
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth/login",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
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
