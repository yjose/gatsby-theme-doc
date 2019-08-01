import React from "react"
import { StaticQuery, graphql } from "gatsby"

import NavBar from "../NavBar"
import Footer from "../Footer"

import "infima/dist/css/default/default.css"
import "./index.css"

const Layout = ({ children }) => (
  <div className="main-container">
    <NavBar />
    {children}
    <Footer />
  </div>
)

export default Layout
