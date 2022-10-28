import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState(0);

  const [toggle, setToggle] = useToggle();
  const totalWithTips = (Number(amount) + Number(tip)).toFixed(2) || 0;
  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleTip(percent) {
    if (!amount) return;
    setTip(((amount / 100) * percent).toFixed(2));
  }

  function handleCustom() {
    setToggle();
  }
  function handleCustomTip(e) {
    setTip(Number(e.target.value));
  }

  function useToggle() {
    const [state, setState] = useState(false);
    const toggle = () => setState((state) => !state);
    return [state, toggle];
  }
  return (
    <div className="App h-screen flex justify-center items-center">
      <div className="flex flex-col rounded-lg shadow-md justify-between border-2 py-4 min-w-[200px] min-h-[300px] bg-red-300">
        <h1 className="text-2xl">Tip Calculator</h1>
        <div className="">
          <label>Total Amount:</label>
          <input
            placeholder="Enter amount"
            className="rounded text-center w-1/2"
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <div className="">
          <p>Total: ${amount}</p>
          <p>Tip: ${tip}</p>
          <p>Total with tips: {totalWithTips}</p>
        </div>
        {toggle && (
          <div className="">
            <input
              placeholder="custom amount"
              onChange={handleCustomTip}
              value={tip}
              className="text-center"
            />
            <div className="">
              {tip ? ((tip / amount) * 100).toFixed(0) + " %" : ""}
            </div>
          </div>
        )}
        <div className="">
          <button
            onClick={() => handleTip(15)}
            className="border-2 m-1 p-1 bg-yellow-400"
          >
            15 %
          </button>
          <button
            onClick={() => handleTip(18)}
            className="border-2 m-1 p-1 bg-yellow-400"
          >
            18 %
          </button>
          <button
            onClick={() => handleTip(22)}
            className="border-2 m-1 p-1 bg-yellow-400"
          >
            22 %
          </button>
          <button
            onClick={handleCustom}
            className="border-2 m-1 p-1 bg-yellow-400"
          >
            Custom
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
