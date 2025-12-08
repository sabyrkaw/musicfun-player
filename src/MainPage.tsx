import { TrackList } from './components/TrackList.tsx'
import { TrackDetails } from './components/TrackDetails.tsx'
import { useState } from 'react'

export function MainPage() {

  const [trackId, setTrackId] = useState<string | null>(null)

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }

  return (
    <>
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </>
  )
}