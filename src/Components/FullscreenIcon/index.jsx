import { PageContext } from "../../Context/pageContext"

import { useContext } from 'react'




function FullscreenIcon({ currentPage }) {


  const { page, setPage } = useContext(PageContext)




  function changeResolutionPage() {


    setPage({ ...page, [currentPage]: { isActive: true, isFullscreen: true, isClosed: false } })


  }



  
  return (

    <section className='window_controls-icon' onClick={() => changeResolutionPage()}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="13" height="13" rx="2" stroke="black" stroke-width="2" />
      </svg>
    </section>

  )


}


export default FullscreenIcon