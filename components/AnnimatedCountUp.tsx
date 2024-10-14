'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnnimatedCountUp = ({amount}: {amount: number   }) => {
  return (
    <CountUp 
    end={amount}
    separator=","
    decimals={2}
    prefix="$"
    />
  )
}

export default AnnimatedCountUp