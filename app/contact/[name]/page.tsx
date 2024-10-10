import React from 'react'
import { Navbar } from '@/app/components/Navbar'
import Username from '@/app/components/Username'
import Add from '@/app/components/Add'

const Name = ({params}: {params: {name: string}}) => {
  return (

    <div>
      <Username name={params.name} />
      <Add value1={12} value2={13} />
      Contact Us
    </div>
  )
}

export default Name
