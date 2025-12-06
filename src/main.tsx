import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { Header } from './components/Header.tsx'
import { SidebarMenu } from './components/SidebarMenu.tsx'
import { PageTitle } from './components/PageTitle.tsx'
import { TrackList } from './components/TrackList.tsx'
import { TrackDetails } from './components/TrackDetails.tsx'
import { Footer } from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)

function MainPage() {
  return (
    <>
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div style={{ display: 'flex', columnGap: '30px' }}>
        <TrackList />
        <TrackDetails />
      </div>
      <Footer />
    </>
  )
}
