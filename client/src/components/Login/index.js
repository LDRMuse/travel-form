import React from 'react'


export const Login = () => {

  const travelButton = (event) => {
    event.preventDefault()
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

