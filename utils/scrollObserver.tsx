
import React ,{useCallback, useState, useEffect} from 'react'

interface ScrollValue{
    scrollY: number;
}

export const scrollContext= React.createContext<ScrollValue>({
  scrollY:0
})


const ScrollObserver: React.FC = ({children}) => {
    const [scrollY, setScrollY] = useState(0)
    const handleScroll = useCallback(()=>{
        setScrollY(window.scrollY)

    },[]) 
    useEffect(() =>{
       document.addEventListener('scroll', handleScroll,{passive: true}) 
       return() => document.removeEventListener('scroll', handleScroll)

    }, [handleScroll] )
  return (
   <scrollContext.Provider value={{scrollY}}>
    {children}
   </scrollContext.Provider>
  )
}

export default ScrollObserver