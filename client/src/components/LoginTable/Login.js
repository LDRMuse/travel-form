import React from 'react'
import PropTypes from 'prop-types'



export const Login = ({handler}) => {


  return (
    <form onSubmit={handler}>
      <label htmlFor="email"></label>
        <input type="email" placeholder="Email"></input>
        <button className="button is-warning mt-3">Get Travel Plans</button>
</form>
  )
}


Login.propTypes = {
  handler: PropTypes.func.isRequired,
}
