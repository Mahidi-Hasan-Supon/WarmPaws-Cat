import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import ServiceCard from "../Compunents/ServiceCard";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PrivateRoute from "../private/PrivateRoute";
import UpdataProfile from "../Compunents/UpdataProfile";
import Error from "../Compunents/Error";
import Loading from "../Compunents/Loading";
import ForgetPassword from "../Compunents/ForgetPassword";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
         path:'aboutUs',
         Component:AboutUs
      },
      {
         path:'contact',
         Component:Contact
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),

        loader: async ({ params }) => {
          const res = await fetch("/services.json");
          const data = await res.json();
          return data;
        },
      },

      {
        path: "/myprofile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute> ,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signUP",
        Component: Signup,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoute>
            <UpdataProfile></UpdataProfile>
          </PrivateRoute>
        ),
      },
      {
       path:'/auth/forgetPassword',
       element:<ForgetPassword></ForgetPassword>
      },
      {
        errorElement: <Error></Error>,
      },
    ],
  },
]);
