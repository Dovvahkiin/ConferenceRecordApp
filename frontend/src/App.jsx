import "./styles/app.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { LoginPage, RegisterPage } from "./components/pages/logRegPage";

function App() {
  return (
    <div style={{ border: "1px solid #2c7094" }}>
      <Header />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
