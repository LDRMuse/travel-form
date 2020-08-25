import React, { useState, useEffect } from 'react'
import api from 'api'

import { Login } from './Login'
import { Table } from './Table'


export const LoginTable = () => {
  const [travels, setTravels] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    user &&
      (async () => {
        try {
          const jsonRes = await api.showTravels(user)
          setTravels(jsonRes)
        } catch (error) {
          console.log(error)

        }
      })()
  }, [user])



  const loginHandler = async (event) => {
    event.preventDefault()
    setUser(event.target.elements[0].value)

  }

  if (!user)
    return (
      <Login handler={loginHandler} />
    )
  return <Table travels={travels} />
}

