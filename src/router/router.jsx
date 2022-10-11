import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import QuizCardsContainer from "../components/Home/QuizCardsContainer";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Topics />,
            loader: async () =>
              fetch("https://openapi.programming-hero.com/api/quiz"),
          },
        ],
      },
      {
        path: "/topics",
        element: <Topics />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      { path: "/blogs", element: <Blogs /> },
    ],
  },
]);
