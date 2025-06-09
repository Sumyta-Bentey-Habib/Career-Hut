import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Blogs from "../pages/Blogs";
import Company from "../pages/Company";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import Home from "../pages/Home";
import JobsDetails from "../pages/JobsDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "jobs/:id",
        element: <JobsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path:'myApplication',
        element:<PrivateRoute>
          <MyApplication></MyApplication>
        </PrivateRoute>


      },
    ],
  },
]);

export default router;
