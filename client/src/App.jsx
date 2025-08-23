import "./styles/general.css";
import router from "./routes/routes";
import { RouterProvider, Link } from "react-router-dom";
// map routes

function App() {
  return <RouterProvider router={router} />;
}

export default App;
