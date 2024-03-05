import React from 'react'
import { social } from '@/utils/social';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const index = () => {
  return (
    <section className="flex">
      <AnimatedTooltip items={social} />
    </section>
  )
}

export default index