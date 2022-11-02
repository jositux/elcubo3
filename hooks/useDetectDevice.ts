import React, { useEffect, useState } from 'react'



const useDetectDevice = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const setSize = () => { 
      setIsMobile(!window.matchMedia('(min-width: 768px)').matches)
    }

    window.addEventListener('resize', setSize );
    
    return () => window.removeEventListener('resize', setSize);

  }, [])
  
  return {
    isMobile
  }
}

export default useDetectDevice