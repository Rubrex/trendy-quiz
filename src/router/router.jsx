import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Statistics from "../components/Statistics/Statistics";
import Quiz from "../components/Topics/Quiz";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
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
        path: "quiz",
        element: <Topics />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        children: [],
      },
      {
        path: "quiz/:id",
        element: <Quiz></Quiz>,
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
      },

      {
        path: "statistics",
        element: <Statistics />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      { path: "blogs", element: <Blogs /> },
    ],
  },
]);
