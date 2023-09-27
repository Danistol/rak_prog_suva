import { Button } from "@mui/material"
import React, { useState } from "react"

const Maths = () => {
  const [count, setCount] = useState(0)

  const changeCount = amount => setCount(previousCount => previousCount + 1)

  return (
    <React.Fragment>
      <h2>{count}</h2>
      <Button
        variant="contained"
        onClick={() => setCount(count + 1)}
        sx={{ marginBottom: 3 }}
      >
        Press me +1
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          setTimeout(() => setCount(previousCount => previousCount + 10), 3000)
        }
      >
        Press me async +10
      </Button>
    </React.Fragment>
  )
}

export default Maths
