import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PostPage from "../Pages/PostPage";



const router = createBrowserRouter([
  {
    path: '/HomePage',
    element: <HomePage/>
  },
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/RegisterPage',
    element: <RegisterPage />
  },
  {
    path: '/AddProductPage',
    element: <PostPage />
  }
])




export default function Rotuer(){
  return <RouterProvider router={router} />
}
