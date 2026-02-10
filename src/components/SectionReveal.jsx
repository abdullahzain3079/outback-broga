import { useInView } from '../hooks/useInView'

export default function SectionReveal({ children, className = '', delay = 0 }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
