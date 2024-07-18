import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: 'LoginPage',
    element: <LoginPage />
  },
  {
    path: 'RegisterPage',
    element: <RegisterPage />
  }
])




export default function Rotuer(){
  return <RouterProvider router={router} />
}
