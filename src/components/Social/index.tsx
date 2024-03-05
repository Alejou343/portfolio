import React from 'react'
import { social } from '@/utils/social';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const index = () => {
  return (
    <section className="flex justify-center md:my-0 mt-[10rem]">
      <AnimatedTooltip items={social} />
    </section>
  )
}

export default index