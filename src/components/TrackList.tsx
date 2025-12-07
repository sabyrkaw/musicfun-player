import { useEffect, useState } from 'react'
import TrackItem from './TrackItem.tsx'

export function TrackList({ selectedTrackId, onTrackSelect }) {
  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((track) => setTracks(track.data))
  }, [])

  if (tracks === null) return <span>Loading...</span>

  if (tracks.length === 0) return <span>No tracks</span>

  const handleResetClick = () => {
    onTrackSelect?.(null)
  }


  const handleClick = (trackId) => {
    onTrackSelect?.(trackId)
  }

  return (
    <div>
      <button onClick={handleResetClick}>
        Reset
      </button>
      <hr />
      <ul>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            track={track}
            onSelect={handleClick}
            isSelected={track.id === selectedTrackId}
          />
        ))}
      </ul>
    </div>
  )
}