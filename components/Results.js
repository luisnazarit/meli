import React from 'react'
import ItemProduct from './ItemProduct'

export default function Results({results}) {
  return (
    results.map(e => <ItemProduct {...e} />)
  )
}
