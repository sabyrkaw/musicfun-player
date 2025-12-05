import { useState } from 'react'

const tracks = [
  {
    id: 1,
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },
  {
    id: 2,
    title: 'MusicFun Soundtrack - Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

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
            <div>{track.title}</div>
            <audio
              src={track.url}
              controls
            ></audio>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
