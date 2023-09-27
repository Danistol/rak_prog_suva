import { useContext, useState } from "react"
import React from "react"

const PropDrilling = () => {
  const [weather, setWeather] = useState(":=)")

  return <Europe weather={weather} />
}

const Europe = weather => {
  return <Estonia weather={weather} />
}

const Estonia = weather => {
  return <Tallinn weather={weather} />
}

const Tallinn = () => {
  return <div>{weather}</div>
}

export default PropDrilling
