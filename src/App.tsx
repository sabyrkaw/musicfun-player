import { useEffect, useState } from 'react'

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((track) => setTracks(track.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) return

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId, {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      },
    }).then((res) => res.json())
      .then((track) => setSelectedTrack(track.data))
  }, [selectedTrackId])

  if (tracks === null) {
    return (
      <>
        <h1>MusicFun Player</h1>
        <span>Loading...</span>
      </>
    )
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>MusicFun Player</h1>
        <span>No tracks</span>
      </>
    )
  }

  return (
    <>
      <h1>MusicFun Player</h1>

      <button
        onClick={() => {
          setSelectedTrackId(null)
          setSelectedTrack(null)
        }}
      >
        Reset selection
      </button>

      <div style={{ display: 'flex', columnGap: '30px' }}>
        <ul>
          {tracks.map((track) => (
            <li
              key={track.id}
              onClick={() => {
                setSelectedTrackId(track.id)
              }}
              style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
            >
              <div>{track.attributes.title}</div>
              <audio
                src={track.attributes.attachments[0].url}
                controls
              ></audio>
            </li>
          ))}
        </ul>
        <div>
          <h2>Details</h2>

          {selectedTrackId === null && (
            <p>Track is not selected</p>
          )}

          {selectedTrackId !== null && selectedTrack === null && (
            <p>Loading...</p>
          )}

          {selectedTrack && (
            <>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyrics || 'No lyrics'}</p>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default App
