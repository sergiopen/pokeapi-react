import React from 'react'
import { useParams } from 'react-router-dom';

export const TypeInfo = () => {
  const { items } = useParams();

  console.log(items)
  return (
    <div>{items}</div>
  )
}

export default TypeInfo