import React from 'react'
import { useParams } from 'react-router-dom'


function TestRoute() {

    const {id} = useParams()
    console.log(id)
  return (
    <div>TestRoute</div>
  )
}

export default TestRoute