import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contacts from "../Pages/Contacts/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
  // login routes
  {
    path: "/login",
    element: <Login></Login>,
  },
  // signUp routes
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
