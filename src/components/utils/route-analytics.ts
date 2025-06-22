// Minimal route analytics implementation
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RouteAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Track page views or other analytics here if needed
    console.log('Route changed:', location.pathname)
  }, [location])

  return null
}

export default RouteAnalytics