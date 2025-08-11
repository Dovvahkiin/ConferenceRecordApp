import "./styles/app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Record from "./components/pages/Record";
import { LoginPage, RegisterPage } from "./components/pages/LogRegPage";

function App() {
  return (
    <div style={{ border: "1px solid #2c7094" }}>
      <Header />
      <Record />
      <Footer />
    </div>
  );
}

export default App;
