import React from 'react'

const CountryData = ({params} : {params: {name: string}}) => {
  return (
    <div>
      <h3>Country Name is {params.name}</h3>
    </div>
  )
}

export default CountryData
