import { useState } from "react";
import Header from "./Components/Header"
import Results from "./Components/Results"
import UserInput from "./Components/UserInput"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})
const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,       // keeping old data 
            [inputIdentifier]: +newValue  // and only updating one user input and other input fields will not get affected
        }                                 // by adding + before newValue, we are converting it to number cause event.target.value is string(or its always takes value in a string)
    })
}

  return (<>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please add a duration greater than zero.</p>}
   {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
