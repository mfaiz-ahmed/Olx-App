import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import PostPage from "../Pages/PostPage";
import ProductDetailPage from "../Pages/ProductDetailPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/LoginPage',
    element: <LoginPage />
  },
  {
    path: '/RegisterPage',
    element: <RegisterPage />
  },
  {
    path: '/AddProductPage',
    element: <PostPage />
  },
  {
    path: '/Detail/:id',
    element: <ProductDetailPage />
  }
])




export default function Rotuer(){
  return <RouterProvider router={router} />
}
