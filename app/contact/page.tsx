import React from 'react'
import Username from '../components/Username'
import Add from '@/app/components/Add'

const Contact = ({params}: {params: {name: string}}) => {
  return (

    <div>
      <Username name={params.name} />
      <Add value1={12} value2={13} />
      Contact Us
    </div>
  )
}

export default Contact
