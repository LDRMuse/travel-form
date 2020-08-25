import React from 'react'

import api from "api"

export const Login = () => {

  const travelButton = async (event) => {
    event.preventDefault()
    const res = await api.loginEmail({email: event.target.value})
console.log('here i am')

  }
  return (
    <form onSubmit={travelButton}>
      <label htmlFor="email"></label>
        <input type="email" placeholder="Email"></input>
        <button className="button is-warning mt-3">Get Travel Plans</button>
</form>
  )
}

