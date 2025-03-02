import { PageContext } from "../../Context/pageContext"
import { useContext } from 'react'

function CloseIcon({ currentPage }) {
  const { page, setPage } = useContext(PageContext)

  function closePage() {
    setPage({ ...page, [currentPage]: { isActive: false, isFullscreen: page.landing.isFullscreen, isClosed: true } })
  }

  return (
    <section className='window_controls-icon' onClick={() => closePage()}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2.14957" height="18.9987" rx="1.07478" transform="matrix(0.709272 -0.704935 0.709272 0.704935 0 1.60715)" fill="currentColor" />
        <rect width="2.14957" height="18.9987" rx="1.07478" transform="matrix(0.709272 0.704935 -0.709272 0.704935 13.4752 0)" fill="currentColor" />
      </svg>
    </section>
  )
}

export default CloseIcon