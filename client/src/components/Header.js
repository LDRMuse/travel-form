import React from 'react'
import { Link, useLocation } from "react-router-dom"

export const Header = () => {
  const location = useLocation()



  return (
    <header className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">

          <Link to="/">
            <h1 className="has-text-centered title">Register for Travel</h1>
          </Link>
          {location.pathname === '/' ?
            <Link to="/login" className="mr-2">
              <button className=" button is-warning mt-3">Login</button>
            </Link> :
            null
          }
        </div>
      </div>
    </header>
  )
}
