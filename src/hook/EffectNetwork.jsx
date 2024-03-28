import { useEffect, useState } from 'react'

export default function EffectNetwork() {
  const [state, setState] = useState(true)

  useEffect(() => {
    const handleOnline = () => {
      console.log('online :>> ', state)
      setState(true)
    }
    const handleOffline = () => {
      console.log('offline :>> ', state)

      setState(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return <h1>{state ? 'Online' : 'Offline'}</h1>
}
