import { useEffect, useRef } from 'react'

interface iUseOutClickProps{
   callback: Function
}

export const useOutClick = (callback: iUseOutClickProps) => {
  const ref = useRef(null)
  
  /* useEffect(() => {
    function modalOutClick(e) {
       const target = e.target
       const element = ref.current
       if (!element.contains(target)) {
          callback()
       }
    }
    window.addEventListener('mousedown', modalOutClick)

    return () => {
       window.removeEventListener('mousedown', modalOutClick)
    }
 }, []) */

  return ref
}
