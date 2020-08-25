import React from 'react'
import { Link } from "react-router-dom"

export const Header = () => {



return (
  <header className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="has-text-centered title">Register for Travel</h1>
        <Link to="/login" className="mr-2">
        <button className=" button is-warning mt-3">Login</button>
    </Link>
      </div>
    </div>
  </header>
)
}
