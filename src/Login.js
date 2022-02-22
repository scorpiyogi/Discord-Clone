import React from "react"
import "./Login.css"
import { Button } from "@mui/material"
import { auth, provider } from "./firebase"

function Login() {
  const signIn = () => {
    // google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://photos5.appleinsider.com/gallery/41364-80254-discord-1-xl.jpg"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
