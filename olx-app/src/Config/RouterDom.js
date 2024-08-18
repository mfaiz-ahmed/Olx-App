import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PostPage from "../Pages/PostPage";
import ProductDetailPage from "../Pages/ProductDetailPage";
import { useEffect, useState } from "react";
import { onAuthStateChanged, auth } from "./Firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/LoginPage",
        element: <LoginPage />,
      },
      {
        path: "/RegisterPage",
        element: <RegisterPage />,
      },
      {
        path: "/AddProductPage",
        element: <PostPage />,
      },
      {
        path: "/Detail/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  } , []);

  useEffect(() => {
    const { pathname } = window.location;
    if (user) {
      console.log(user, "user logged in hai");
      if (pathname === "/LoginPage") {
        navigate("/");
      }
    }
    else{
      console.log('user logged out hai');
      if(pathname === '/AddProductPage'){
        navigate('/LoginPage')
      }
    }
  }, [window.location.pathname, user]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function Rotuer() {
  return <RouterProvider router={router} />;
}
