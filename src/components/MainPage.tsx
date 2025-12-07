// import { Header } from './Header.tsx'
// import { SidebarMenu } from './SidebarMenu.tsx'
// import { PageTitle } from './PageTitle.tsx'
import { TrackList } from './TrackList.tsx'
import { TrackDetails } from './TrackDetails.tsx'
import { useState } from 'react'

// import { Footer } from './Footer.tsx'

export function MainPage() {

  const [trackId, setTrackId] = useState(null)

  const handleTrackSelect = (id) => {
    setTrackId(id)
  }

  return (
    <>
      {/*<Header />*/}
      {/*<SidebarMenu />*/}
      {/*<PageTitle />*/}
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
      {/*<Footer />*/}
    </>
  )
}