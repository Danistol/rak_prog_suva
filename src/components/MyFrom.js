import { Box, Button, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"

const MyForm = () => {
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")

  const [myForm, setMyFrom] = useState(null)

  const saveFields = event => {
    setMyFrom(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  }

  const submitForm = event => {
    event.preventDefault()

    console.log({ name })
  }

  useEffect(() => {
    console.log("No dependancy array")
  })

  useEffect(() => {
    console.log("Empty dependancy array")

    return () => {}
  })

  useEffect(() => {
    console.log("myFrom updated")
  }, [myForm])

  return (
    <form onSubmit={submitForm}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2em"
        }}
      >
        <TextField
          required
          name="name"
          id="outlined-required"
          label="Name"
          // onChange={event => setName(event.target.value)}
          onChange={saveFields}
        />
        <TextField
          name="School"
          id="outlined-required"
          label="School"
          onChange={saveFields}
        />
        <Button
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default MyForm
