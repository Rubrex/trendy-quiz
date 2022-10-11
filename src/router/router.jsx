import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/topics", element: <Topics /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blogs", element: <Blogs /> },
    ],
  },
]);
