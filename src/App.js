import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setValue(value - 1)}>Azalt</button>
      <input value={value} />
      <button onClick={() => setValue(value + 1)}>Arttır</button>
    </div>
  );
}

export default App;
