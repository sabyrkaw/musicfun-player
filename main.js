const tracks = [
    {
        title: 'MusicFun Soundtrack',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
    },
    {
        title: 'MusicFun Soundtrack - Instrumental',
        url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
    },
]

const rootEl = document.getElementById('root')

const titleEl = document.createElement('h1')
const trackListEl = document.createElement('ul')

titleEl.append('MusicFun Player')

tracks.forEach((track) => {
    const trackEl = document.createElement('li')
    const trackLabelEl = document.createElement('div')
    const trackAudioControlsEl = document.createElement('audio')

    trackLabelEl.append(track.title)

    trackAudioControlsEl.src = track.url
    trackAudioControlsEl.controls = true

    trackEl.append(trackLabelEl, trackAudioControlsEl)
    trackListEl.append(trackEl)
})

rootEl.append(titleEl, trackListEl)
