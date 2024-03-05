import React from 'react'
import { habilities } from '@/utils/habilities';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const index = () => {
  return (
    <section className="flex justify-center md:my-0 mb-[10rem]">
      <AnimatedTooltip items={habilities} />
    </section>
  )
}

export default index