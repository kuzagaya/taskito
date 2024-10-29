import React from 'react'
import AppImage from "../assets/Taskito.png"

export default function MobileDevice() {
  return (
    <div>
        <h2 style={{textAlign: 'center', fontSize: "28px", fontWeight: "bold", color: "white"}}>Sorry, Mobile Devices Not Supported</h2>
        <p style = {{color: "white", textAlign:"center"}}>This app is not optimized for mobile devices. Please use a desktop or laptop computer to view this app.</p>
        <img src={AppImage} alt="Taskito" style={{aspectRatio: "16/9", width: "100%"}}/>
    </div>
  )
}
