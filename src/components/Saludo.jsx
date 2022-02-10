import React from 'react'

const Saludo = (props) => {
  return (
    <div>
        <h3>Saludos don {props.name}</h3>
        <p>Edad: {props}</p>
    </div>
  )
}

export default Saludo