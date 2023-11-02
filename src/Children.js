import React from 'react'
import Test2 from './Test2'

export default function Children({children}) {

  console.log('Children',children)
  return (
    <div><Test2/></div>
  )
}
