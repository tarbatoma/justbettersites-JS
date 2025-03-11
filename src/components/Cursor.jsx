import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', mouseMove)
    
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 20,
      width: 20,
      backgroundColor: '#0077ED',
      mixBlendMode: 'difference'
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 80,
      width: 80,
      backgroundColor: 'white',
      mixBlendMode: 'difference'
    }
  }
  
  return (
    <motion.div
      className="cursor hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
        mass: 0.5
      }}
    />
  )
}

export default Cursor