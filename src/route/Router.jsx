import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import ServiceCard from "../Compunents/ServiceCard";
import ServiceDetails from "../pages/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
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
        Component:ServiceDetails,
        
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

    ],
  },
]);
