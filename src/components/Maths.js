import React, { useState } from "react"

const Maths = () => {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Press me</button>
    </React.Fragment>
  )
}

export default Maths
