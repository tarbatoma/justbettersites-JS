// src/Settings/LazySection.jsx
import { useInView } from 'react-intersection-observer'

const LazySection = ({ children, threshold = 0.15 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold })
  return <div ref={ref}>{inView ? children : null}</div>
}

export default LazySection
