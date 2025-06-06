import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Blogs from "../pages/Blogs";
import Company from "../pages/Company";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>,
  },
  {
    path: "/company",
    element: <Company></Company>,
  },
  {
path:"/sign-in",
element:<SignIn></SignIn>
  },
  {
path:"/register",
element:<Register></Register>
  },
]);
export default router;
