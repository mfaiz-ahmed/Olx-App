import { createBrowserRouter , RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: 'LoginPage',
    element: <LoginPage />
  }
])




export default function Rotuer(){
  return <RouterProvider router={router} />
}
