import React from 'react'
import PropTypes from 'prop-types'

export const Login = () => {
  return (
    <form>
      <label htmlFor="email"></label>
        <input type="email" placeholder="Email"></input>
        <button className="button is-warning mt-3">Get Travel Plans</button>
</form>
  )
}

Login.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
}
