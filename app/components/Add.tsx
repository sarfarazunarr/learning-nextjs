import React from 'react'

const Add = ({value1, value2}: {value1: number, value2: number}) => {
    let sum = value1 + value2;
  return (
    <div>
      The answer of your values is {value1} + {value2} = {sum}
    </div>
  )
}

export default Add
