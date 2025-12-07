import { useEffect, useState } from 'react'

export function TrackDetails({ trackId }) {
  const [selectedTrack, setSelectedTrack] = useState(null)

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null)
      return
    }

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((track) => setSelectedTrack(track.data))
  }, [trackId])

  return (
    <div>
      <h2>Details</h2>

      {!selectedTrack && !trackId && <p>Track is not selected</p>}
      {!selectedTrack && trackId && <p>Loading...</p>}
      {selectedTrack && (
        <>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics || 'No lyrics'}</p>
        </>
      )}
    </div>
  )
}