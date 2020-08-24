import PropTypes from "prop-types"
import React from "react"

export const Input = ({ id, placeholder, type, handler, error }) => (
  <div className="field">
    <label className="label" htmlFor={id}>
      {placeholder}
    </label>
    <div className="control">
      <input
        type={type}
        id={id}
        onChange={handler}
        required
        pattern={"^[a-zA-Z]+$" || "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$"}
        />
    </div>
    {error ? <p className='help is-danger'>{error}</p> : null}
  </div>
)

Input.propTypes = {
  handler: PropTypes.func,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
}

Input.defaultProps = { type: "text" }
