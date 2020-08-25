import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

import { Checkbox, Input, Radio } from "./Inputs"
import { Select } from "./Select"


import api from 'api'

export const Form = () => {
  const history = useHistory()


  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [gender, setGender] = useState("")
  const [destination, setDestination] = useState("India")
  const [isVegan, setIsVegan] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)

  const destinations = {
    id: "destination",
    options: ["India", "America", "Australia", "Germany"],
  }

  const dietaryRestrictions = [
    {
      checked: isVegan,
      id: "isVegan",
      label: "Vegan",
      type: "checkbox",
      value: "isVegan",
    },
    {
      checked: isLactoseFree,
      id: "isLactoseFree",
      label: "Lactose Free",
      type: "checkbox",
      value: "isLactoseFree",
    },
  ]

  const genderInputs = [
    {
      name: "gender",
      type: "radio",
      value: "M",
    },
    {
      name: "gender",
      type: "radio",
      value: "F",
    },
  ]

  const textInputs = [
    {
      id: "fName",
      placeholder: "First Name",
      error: firstNameError,
    },
    {
      id: "lName",
      placeholder: "Last Name",
      error: lastNameError,
    },
    {
      id: "email",
      placeholder: "Email",
      type: "email",
      error: emailError,
    },
  ]


  const validator = {
    validateEmails(val) {

      const emailRe = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      return (
        (val && emailRe.test(val)) ||
        "Email must be non-empty and valid"
      )

    },

    validateNames(val) {
      // Letters Only RegExp - 'start with letters only (unlimited) through the end of the string'
      const lettersRe = new RegExp(/^[a-zA-Z]+$/g)
      // Non-empty and less than 15 characters
      return (
        (val && lettersRe.test(val)) ||
        "Name must be non-empty and letters only "
      )
    },
  }

  const handleChange = ({ target: { id, value, checked } }) => {
    switch (id) {
      case "fName":
        setFirstNameError('')
        if (typeof validator.validateNames(value) === 'string') {
          setFirstNameError(validator.validateNames(value))
        } else {
          setFirstName(value)
        }
        break
      case "lName":
        setLastNameError('')
        if (typeof validator.validateNames(value) === 'string') {
          setLastNameError(validator.validateNames(value))
        } else {
          setLastName(value)
        }
        break
      case "email":
        setEmailError('')
        if (typeof validator.validateEmails(value) === 'string') {
          setEmailError(validator.validateEmails(value))
        } else {
          setEmail(value)
        }

        break
      case "destination":
        setDestination(value)
        break
      case "isVegan":
        setIsVegan(checked)
        break
      case "isLactoseFree":
        setIsLactoseFree(checked)
        break
      // If nothing else, must be 🔘s
      default:
        setGender(value)
    }
  }

  const handleClick = async () => {
    const res = await api.deleteAllTravels()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // dont do anything if there are errors
    if (!firstNameError && !lastNameError && !emailError) {
      api.addTravel({
        firstName,
        lastName,
        email,
        gender,
        destination,
        dietRestrictions: { isVegan, isLactoseFree }
      })
      .then(() => {
        history.push('/feedback', {success: true})
      })
      .catch((e) => {
        history.push('/feedback', { error: e })
      })
    }
  }



  return (
    <>
      <form className="center" onSubmit={handleSubmit}>
        <div className="grid mt-3">
          {textInputs.map(({ id, placeholder, error }, i) => (
            <Input
              error={error}
              handler={handleChange}
              id={id}
              key={i}
              placeholder={placeholder}
            />
          ))}
          <Select selections={destinations} handler={handleChange} />
        </div>

        <div className="flex flex--justify-space-around">
          {genderInputs.map(({ name, value }, i) => (
            <Radio
              checked={gender === value}
              name={name}
              value={value}
              handler={handleChange}
              key={i}
            />
          ))}

          {dietaryRestrictions.map(({ checked, id, label, value }, i) => (
            <Checkbox
              id={id}
              label={label}
              value={value}
              handler={handleChange}
              checked={checked}
              key={i}
            />
          ))}
        </div>
        <div className="has-text-centered mt-2">
          <button className="button is-primary mt-3">Submit</button>
        </div>
      </form>

      <div className="has-text-centered mt-2">
        <button className='button is-danger' onClick={handleClick}>Delete</button>
      </div>
    </>

  )
}
