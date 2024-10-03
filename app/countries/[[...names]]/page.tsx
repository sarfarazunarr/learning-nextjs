import React from 'react'

const CountriesData = ({params}: {params: {names: string[]}}) => {
    console.log(params)
  return (
    <div>
      <h3>Country Name: {params.names[0]}</h3>
      <h3>Capital Name: {params.names[1]}</h3>
    </div>
  )
}

export default CountriesData
