
import React from 'react'
import { useLocation } from 'react-router-dom'

export const Error = () => {
const {
  state: {
    error: {name, message},
  },
} = useLocation()

return (
  <p> Currently facing issues {name} - {message}</p>
)
}
