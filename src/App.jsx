import Footer from "./assets/Footer";
import Home from "./components/home/Home";
import {createBrowserRouter, ScrollRestoration, Outlet, RouterProvider} from "react-router-dom"

const Layout = () => {
  return (
    <div>
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
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/auth/login',
        element: <Home />
      },
    ]
  }
])

function App () {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
