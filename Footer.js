import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"

function Footer() {
  let footerStyle = {
    backgroundColor: "gray",
    marginTop:"15px",
    height:"60px"
  }

  let textStyle ={
    paddingTop:"10px",
    fontSize:"large",
    fontWeight:"bold"
  }
  return (
        <div style ={footerStyle}>
          <h4 style ={textStyle}>Copyright @copy 2022</h4>
        </div>
  )
}

export default Footer
