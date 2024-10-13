"use client"
import React from 'react'

const Add = ({value1, value2}: {value1: number, value2: number}) => {
    const sum = value1 + value2;
    console.log("Hello")
  return (
    <div>
      The answer of your values is {value1} + {value2} = {sum}
    </div>
  )
}

export default Add
