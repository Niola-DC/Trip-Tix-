import AboutUs from "./components/aboutUs/AboutUs";
import Home from "./components/home/Home";
import {createBrowserRouter, ScrollRestoration, Outlet, RouterProvider} from "react-router-dom"
import Navlinks from "./components/home/header/sub-component/Navlinks";
import Footer from "./components/footer/Footer";
import Travel from "./components/travel/Travel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from "./components/faq/Faq";

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
      { path: '/', element: <Home /> },
      { path: 'aboutus', element: <AboutUs /> },
      { path: 'faq', element: <Faq /> },
      { path: '/travel', element: <Travel /> },

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
