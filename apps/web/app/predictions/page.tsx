'use client'
import * as React from 'react'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const playerId1 = searchParams.get('playerId1')
  const playerId2 = searchParams.get('playerId2')

  const [prediction, setPrediction] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    async function getPrediction() {
      const url = '/api/predictions'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify({
          playerIds: [playerId1, playerId2]
        })
      })
      console.log('response', response)
    }

    if (playerId1 && playerId2) {
      try {
        setLoading(true)
        getPrediction()
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(true)
      }
    }
  }, [])

  return <div className='flex flex-col gap-4'>head to head</div>
}
