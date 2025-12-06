import { useEffect, useState } from 'react'

export function TrackDetails() {
  const [selectedTrack, setSelectedTrack] = useState(null)
  const selectedTrackId = null

  useEffect(() => {
    if (!selectedTrackId) return

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId, {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((track) => setSelectedTrack(track.data))
  }, [selectedTrackId])

  return (
    <div>
      <h2>Details</h2>

      {!selectedTrack && !selectedTrackId && <p>Track is not selected</p>}
      {!selectedTrack && selectedTrackId && <p>Loading...</p>}
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