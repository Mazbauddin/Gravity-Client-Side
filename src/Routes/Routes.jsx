import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contacts from "../Pages/Contacts/Contacts";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Start from "../Pages/Dashboard/Common/Start";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory";
import Profile from "../Pages/Dashboard/Common/Profile";
import AllEmployeeList from "../Pages/Dashboard/Admin/AllEmployeeList";
import EmployeeList from "../Pages/Dashboard/HR/EmployeeList";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";

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
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Start></Start>
          </PrivateRoute>
        ),
      },
      {
        path: "work-sheet",
        element: (
          <PrivateRoute>
            <WorkSheet></WorkSheet>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      // Admin Relate work
      {
        path: "all-employee-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllEmployeeList></AllEmployeeList>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // Hr related work here
      {
        path: "employee-list",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeList></EmployeeList>
            </HrRoute>
          </PrivateRoute>
        ),
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
