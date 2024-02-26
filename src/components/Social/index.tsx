import React from 'react'
import { social } from '@/utils/social';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const index = () => {
  return (
    <div className="flex">
      <AnimatedTooltip items={social} />
    </div>
  )
}

export default index