import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [message, setMessage] = useState("");
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/api");
    console.log(response.data.message);
    setMessage(response.data.message);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <p>Message is {message}</p>
    </div>
  );
}

export default App;
