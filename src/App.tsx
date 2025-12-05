import { useEffect, useState } from 'react'

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null)
  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': import.meta.env.VITE_API_KEY,
      }
    }).then((res) => res.json())
      .then((track) => setTracks(track.data))
  }, [])

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

      <button onClick={() => setSelectedTrackId(null)}>
        Reset selection
      </button>

      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            onClick={() => setSelectedTrackId(track.id)}
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
    </>
  )
}

export default App
