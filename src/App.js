import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState();
  const [showResult, setShowResult] = useState(false);

  let status = "normal Wight";
  if (bmi < 18.5) status = "underwight";
  else if (bmi > 18.5 && bmi <= 24.9) status = "Normal Weight";
  else if (bmi > 24.9 && bmi <= 29.9) status = "Overweight";
  else status = "obesity";

  const findBmi = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const h = heightNum * 0.3048;
      const b = weightNum / (h * h);
      console.log(b);
      setBmi(b.toFixed(2));
      setShowResult(true);
    } else {
      setBmi(null);
      setShowResult(false);
      alert("Please enter valid numeric values for weight and height.");
    }
  };

  return (
    <div className="main">
      <h2 className="center">BMI Calculator</h2>
      <label>Weight (Kg)</label>
      <input
        className="input-wt"
        value={weight}
        placeholder="Enter Your Weight"
        onChange={(e) => setWeight(e.target.value)}
      />
      <label>Height (feet)</label>
      <input
        className="input-ht"
        value={height}
        placeholder="Enter Your Height"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="btn" onClick={findBmi}>
        Submit
      </button>
      <button
        className="btn"
        onClick={() => {
          setHeight("");
          setWeight("");
          setShowResult(false);
        }}
      >
        Reload
      </button>
      {showResult && (
        <div>
          <h2>Your BMI is {bmi}</h2>
          <h3>You are {status}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
