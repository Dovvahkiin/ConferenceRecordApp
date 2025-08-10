import "./styles/app.css";
import Header from "./components/Header";
import { LoginPage, RegisterPage } from "./components/logRegPage";

function App() {
  return (
    <div style={{ border: "1px solid #2c7094" }}>
      <Header />
      <RegisterPage />
    </div>
  );
}

export default App;
