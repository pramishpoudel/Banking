'use client'
import { CornerUpLeft } from 'lucide-react'
import React from 'react'
import Countup from 'react-countup'


const AnimatedCounter = ({amount}: {amount : number}) => {
  return (
    <div className="w-full">
      <Countup
        decimals={2}
        decimal=","
        prefix="$"
        end={amount} />
      </div>
  )
}

export default AnimatedCounter