// "use client" // if we do not write "use state" here then we will be unable to use useState

// import { PRODUCT_CATEGORIES } from "@/config"
// import { act, useRef, useState } from "react"
// import Navitem from "./Navitem"

// const NavItems = () => {
//     const [activeIndex, setActiveIndex] = useState <null | number>(null)

//     const isAnyOpen = activeIndex !== null

//     const navRef = useRef<HTMLDivElement | null>(null)
//     return <div className="flex gap-4 h-full">
//         {PRODUCT_CATEGORIES.map((category, i) => {
//             const handleOpen = () => {
//                 if(activeIndex === i){
//                     setActiveIndex(null)
//                 }else{
//                     setActiveIndex(i)
//                 }

//             }
//             const isOpen = i === activeIndex
//             return (
//                 <Navitem
//                 category={category}
//                 handleOpen={handleOpen}
//                 isOpen = {isOpen}
//                 key={category.value}
//                 isAnyOpen = {isAnyOpen}
//                 close={close}
//                 />
//             )
//         })}
//     </div>
// }
// export default NavItems


'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'
import { useEffect, useRef, useState } from 'react'
import Navitem from './Navitem'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<
    null | number
  >(null)

  useEffect(() => { // this is for if uikits or icon is open in navbar then we colse these by clicking escape button
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null)) //  basically this is for if our uikits or icons is open in navbar and if we click outside this then it will close the uikits or icons

  return (
    <div className='flex gap-4 h-full' ref={navRef}> 
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const close = () => setActiveIndex(null)

        const isOpen = i === activeIndex

        return (
          <Navitem
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems