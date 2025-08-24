import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Record from "../pages/Record";
import NewPost from "../pages/NewPost";
import Profile from "../pages/Profile";
import Moderation from "../pages/Moderation";
import Administration from "../pages/Administration";

const router = createBrowserRouter([
  {
    path: "/", // path (route)
    element: <Home />, //component of route
    errorElement: <NotFound />, // 404 page
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/record/:id",
    element: <Record />,
  },
  {
    path: "/newpost",
    element: <NewPost />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/mod",
    element: <Moderation />,
  },

  {
    path: "/admin",
    element: <Administration />,
  },
]);

export default router;
