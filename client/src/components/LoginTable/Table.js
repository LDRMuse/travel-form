import React from 'react'
import PropTypes from 'prop-types'

export const Table = ({travels}) => {


  return (
    <ul>
  {travels.map(({destination}, i) => {
    return (
      <li key={i}>
        {destination}
      </li>
    )
  })}

    </ul>
  )

}

Table.propTypes = {
  travels: PropTypes.array,
}
