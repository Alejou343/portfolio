import React from 'react'
import { habilities } from '@/utils/habilities';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const index = () => {
  return (
    <div className="flex">
      <AnimatedTooltip items={habilities} />
    </div>
  )
}

export default index