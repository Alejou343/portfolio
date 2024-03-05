import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <footer className="py-6 w-full border-t-2 border-cyan-400 rounded-lg z-10 !absolute !bottom-0">
        <div className="container mx-auto">
            <div className="row text-center flex w-full justify-between">
                <div className="mx-auto rounded-full bg-white">
                    <Link href="https://github.com/Alejou343" target='blank'>
                        <Image src="/assets/Social/Social-github.png" alt="github" width={20} height={20} /> 
                    </Link>
                </div>
                <div className="mx-auto">
                    <a href="mailto:alejandro.auribe1@gmail.com?Subject=Interesado%20en%20contactarme" target='blank'>
                        <Image src="/assets/Social/Social-gmail.png" alt="gmail" width={20} height={20} />
                    </a>
                </div>
                <div className="mx-auto">
                    <Link href="whatsapp://send?phone=+573506217627" target='blank'>
                        <Image src="/assets/Social/Social-whatsapp.png" alt="whatsapp" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default index