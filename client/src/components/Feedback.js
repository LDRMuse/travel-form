
import React from 'react'
import { useLocation } from 'react-router-dom'


export const Feedback = () => {
  const {
    state: {
      error
    }
  } = useLocation()



  return error ? (
    <p> Currently facing issues {error.name} - {error.message}</p>
  )

    : (
      <p>Success!! Registered for Travel</p>
    )

}
