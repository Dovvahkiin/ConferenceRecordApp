import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Record from "../pages/Record";
import NewPost from "../pages/NewPost";
import Profile from "../pages/Profile";
import Administration from "../pages/Administration";
import AdminGetUsers from "../components/AdminDash/AdminContent/AdminUsers/AdminGetUsers";
import AdminAddUser from "../components/AdminDash/AdminContent/AdminUsers/AdminAddUser";
import AdminRemoveUser from "../components/AdminDash/AdminContent/AdminUsers/AdminRemoveUser";
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
    path: "/admin",
    element: <Administration />,
  },
  {
    path: "/admin?get=allusers",
    element: <AdminGetUsers />,
  },
  {
    path: "/admin?post=adduser",
    element: <AdminAddUser />,
  },
  {
    path: "/admin?delete=removeuser",
    element: <AdminRemoveUser />,
  },
]);

export default router;
