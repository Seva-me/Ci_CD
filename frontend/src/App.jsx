import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const callBackend = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/hello");
      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Error calling backend");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🚀 Frontend App</h1>

      <button onClick={callBackend} style={{ padding: "10px 20px" }}>
        Call Backend API
      </button>

      <div style={{ marginTop: "20px" }}>
        {loading ? <p>Loading...</p> : <p>{message}</p>}
      </div>
    </div>
  );
}

export default App;