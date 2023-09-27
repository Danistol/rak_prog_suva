import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Toggle from "./components/Toggle"
import Show from "./components/Show"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="Container">
      <h1>HI</h1>
      <Show show={show} />
      <Toggle toggleShow={toggleShow} />
    </div>
  )
}

export default App
