import { 
  GithubFilled,
  FacebookFilled
} from "@ant-design/icons"

import React from "react"

export const Facebook = () => {
  return (
    <div
      style={{
        display: "flex",
        height: 26
      }}
      onClick={() => {
        window.open("https://www.facebook.com/justine1996?mibextid=ZbWKwL")
      }}
    >
      <FacebookFilled />
    </div>
  )
}

export const Github = () => {
  return (
    <div
      style={{
        display: "flex",
        height: 26
      }}
      onClick={() => {
        window.open("https://github.com/JustineM1996")
      }}
    >
      <GithubFilled/>
    </div>
  )
}