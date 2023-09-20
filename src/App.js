import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name=" Daniil!" />
        <Hello name=" Raimo!" />
        <Hello
          name=" Juhan"
          age={20}
          school=" TLU"
        />
        <Maths>()</Maths>
        <Maths>()</Maths>
        <Maths>()</Maths>
      </header>
    </div>
  )
}

export default App
