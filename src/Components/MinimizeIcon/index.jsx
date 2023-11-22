import { PageContext } from "../../Context/pageContext"

import { useContext } from 'react'




function MinimizeIcon({ currentPage }) {


  const { page, setPage } = useContext(PageContext)




  function minimizePage() {


    setPage({ ...page, [currentPage]: { isActive: false, isFullscreen: page.landing.isFullscreen, isClosed: false } })


  }




  return (

    <section className='window_controls-icon' onClick={() => minimizePage()}>
      <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="15" height="3" rx="1.5" fill="black" />
      </svg>
    </section>

  )


}


export default MinimizeIcon