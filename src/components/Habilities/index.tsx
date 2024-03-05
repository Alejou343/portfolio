import React from 'react'
import { habilities } from '@/utils/habilities';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const index = () => {
  return (
    <section className="flex">
      <AnimatedTooltip items={habilities} />
    </section>
  )
}

export default index