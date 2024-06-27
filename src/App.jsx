import InputComponent from "./Compnents/InputComponent.jsx";
import {useState} from "react";
import ResultsComponent from "./Compnents/ResultsComponent.jsx";
function App() {
  const [investment, setInvestment] = useState({
    initialInvestment:0,
    annualInvestment:0,
    expectedReturn:0,
    duration:0
  })

  function handleInput(investment){
    setInvestment(prevInvest=> {
      return{
        ...prevInvest,
        [investment.label] : investment.value,
      }
    });
  }
  return (<>
      <InputComponent InputHandler={handleInput}/>
    {investment.duration > 0 ?
        <ResultsComponent userData={investment}/>:
        investment.duration < 0?
        <h2 className="center">The duration should be a positive number</h2>:''}
    </>
    )
}

export default App
