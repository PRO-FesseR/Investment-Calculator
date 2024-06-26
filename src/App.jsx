import InputComponent from "./Compnents/InputComponent.jsx";
import {useState} from "react";
function App() {
  const [investment, setInvestment] = useState({
    initialInvestment:0,
    annualInvestment:0,
    expectedReturn:0,
    duration:0
  })
  function handleInput(investment){
    // setInvestment(prevInvest=> );
  }
  return (
      <InputComponent/>
  )
}

export default App
