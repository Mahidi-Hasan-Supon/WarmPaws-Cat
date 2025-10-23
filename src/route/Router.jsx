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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement:<Loading></Loading>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path:'/services',
        Component:Services,
        
      },
      {
        path:'/service-details/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        
        loader: async ({ params }) => {
    
      const res = await fetch('/services.json');
      const data = await res.json();
      return data; 
    },
      },
      
      {
        path:'/myprofile',
        Component:MyProfile,
      },
      {
        path:'/login',
        Component:Login,
      },
      {
        path:'/signUP',
        Component:Signup,
      },
      {
        path:'/updateprofile',
        element:<PrivateRoute><UpdataProfile></UpdataProfile></PrivateRoute>,
      },
      {
        errorElement:<Error></Error>
      }

    ],
  },
]);
