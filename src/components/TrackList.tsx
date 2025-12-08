import { useEffect, useState } from 'react'
import { TrackItem, type TrackListItemOutput } from './TrackItem.tsx'


type Props = {
  selectedTrackId: string | null
  onTrackSelect: (id: string | null) => void
}

export const TrackList = ({ selectedTrackId, onTrackSelect }: Props) => {
  const [tracks, setTracks] = useState<TrackListItemOutput[] | null>(null)

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


  const handleClick = (trackId: string) => {
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