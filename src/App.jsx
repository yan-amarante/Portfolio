import './App.css'
import { useContext, useRef, useEffect, useState } from 'react'
import { PageContext } from "./Context/pageContext.jsx"

function App() {

  const { page, setPage } = useContext(PageContext)

  return (
    <section className='container'>
      {(page.landing.isActive ?
        <LandingPage />
        :
        null
      )}
      {(page.skills.isActive ?
        <SkillsPage />
        :
        null
      )}
      {(page.projects.isActive ?
        <ProjectsPage />
        :
        null
      )}
      <Header />
    </section>
  )
}

function LandingPage() {

  const [headerPressed, setHeaderPressed] = useState(false)
  const [windowPressed, setWindowPressed] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 0, height: 0 })
  const headerRef = useRef(null)

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  useEffect(() => {
    setSize({ width: headerRef.current.clientWidth, height: headerRef.current.clientHeight })
  }, [])

  const onMouseMove = (event) => {

    if (headerPressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY
      })
    }
  }

  function verifyMousePosition(event) {


    const mousePosition = {

      x: event.clientX,

      y: event.clientY

    }

    const windowPosition = {

      top: headerRef.current.getBoundingClientRect().top,

      left: headerRef.current.getBoundingClientRect().left,

      right: headerRef.current.getBoundingClientRect().right,

      bottom: headerRef.current.getBoundingClientRect().bottom

    }

    const hitboxValue = 10




    if (mousePosition.x < windowPosition.left + hitboxValue && mousePosition.y > windowPosition.bottom - hitboxValue) {


      headerRef.current.style.cursor = "sw-resize	"

      verifyWindowWidth(event.movementX, event.movementY)


    } else {

      setWindowPressed(false)

      headerRef.current.style.cursor = "default	"


    }


  }

  function verifyWindowWidth(movementX, movementY) {



    if (windowPressed && movementX >= 1 && movementY <= 0) {


      headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width - 1}px`

      headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height - 1}px`


    }else if(windowPressed && movementX <= 0 && movementY >= 0){


      headerRef.current.style.width = `${headerRef.current.getBoundingClientRect().width + 1}px`

      headerRef.current.style.height = `${headerRef.current.getBoundingClientRect().height + 1}px`


    }


  }

  return (
    <main
      onMouseMove={verifyMousePosition}
      onMouseDown={() => setWindowPressed(true)}
      onMouseUp={() => setWindowPressed(false)}
      ref={headerRef}
      className='container-landing_page'>
      <header
        onClick={() => console.log(size)}
        onMouseMove={onMouseMove}
        onMouseDown={() => setHeaderPressed(true)}
        onMouseUp={() => setHeaderPressed(false)}
        className='window-header'>
        <section className='window_header-infos'>
          <LandingPageIcon nameClass="icon-window_header" width="11%" height="auto" color="black" />
          <h5 className='name-window'>Apresentacão.exe</h5>
        </section>
        <section className='window-controls'>
          <MinimizeIcon currentPage="landing" />
          <FullscreenIcon currentPage="landing" />
          <CloseIcon currentPage="landing" />
        </section>
      </header>
      <section className='window-display'>
        <article className='presentation-text'>
          <h3 className='h3-landing_page'>Olá, me chamo</h3>
          <h2 className='h2-landing_page'>Yan Amarante</h2>
          <p className='paragraph-landing_page'>Sou capaz de desenvolver lindas interfaces no front-end e APIs
            rapidas e seguras no back-end</p>
        </article>
      </section>
    </main>
  )
}

function SkillsPage() {
  return (
    <main className='container-landing_page'>
      <header className='window-header'>
        <section className='window_header-infos'>
          <LandingPageIcon nameClass="icon-window_header" width="11%" height="auto" color="black" />
          <h5 className='name-window'>Apresentacão.exe</h5>
        </section>
        <section className='window-controls'>
          <MinimizeIcon currentPage="skills" />
          <FullscreenIcon currentPage="skills" />
          <CloseIcon currentPage="skills" />
        </section>
      </header>
      <section className='window-display'>
        SKILLS
      </section>
    </main>
  )
}
function ProjectsPage() {
  return (
    <main className='container-landing_page'>
      <header className='window-header'>
        <section className='window_header-infos'>
          <LandingPageIcon nameClass="icon-window_header" width="11%" height="auto" color="black" />
          <h5 className='name-window'>Apresentacão.exe</h5>
        </section>
        <section className='window-controls'>
          <MinimizeIcon currentPage="projects" />
          <FullscreenIcon currentPage="projects" />
          <CloseIcon currentPage="projects" />
        </section>
      </header>
      <section className='window-display'>
        PROJECTS
      </section>
    </main>
  )
}

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
function CloseIcon({ currentPage }) {

  const { page, setPage } = useContext(PageContext)

  function closePage() {
    setPage({ ...page, [currentPage]: { isActive: false, isFullscreen: page.landing.isFullscreen, isClosed: true } })
  }

  return (
    <section className='window_controls-icon' onClick={() => closePage()}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="2.14957" height="18.9987" rx="1.07478" transform="matrix(0.709272 -0.704935 0.709272 0.704935 0 1.60715)" fill="black" />
        <rect width="2.14957" height="18.9987" rx="1.07478" transform="matrix(0.709272 0.704935 -0.709272 0.704935 13.4752 0)" fill="black" />
      </svg>
    </section>
  )
}


function Header() {

  const { page, setPage } = useContext(PageContext)

  function changeWindow(currentPage, currentObject) {

    if (!currentObject.isActive) {
      setPage({ ...page, [currentPage]: { isActive: true, isFullscreen: currentObject.isFullscreen, isClosed: false } })
    } else if (currentObject.isActive) {
      setPage({ ...page, [currentPage]: { isActive: false, isFullscreen: currentObject.isFullscreen, isClosed: false } })
    }
  }

  function verifyOutlineState(currentPage) {
    if (currentPage.isActive) {
      return "outline-active"
    } else if (!currentPage.isClosed && !currentPage.isActive) {
      return "outline-not_closed"
    } else if (currentPage.isClosed) {
      return "outline-closed"
    }
  }

  function verifyIconState(currentPage) {
    if (currentPage.isActive) {
      return "icon-header icon-header-active"
    } else if (currentPage.isClosed || !currentPage.isActive) {
      return "icon-header icon-header-not_active"
    }
  }

  return (
    <header className='container-header'>
      <h2 className='title-header'>Yan Amarante</h2>
      <nav className='navigation-container'>
        <section onClick={() => changeWindow("landing", page.landing)} className={verifyIconState(page.landing)}>
          <LandingPageIcon width="50%" height="auto" color="white" />
          <div className={verifyOutlineState(page.landing)}></div>
        </section>
        <section onClick={() => changeWindow("skills", page.skills)} className={verifyIconState(page.skills)}>
          <SkillsIcon width="50%" height="auto" color="white" />
          <div className={verifyOutlineState(page.skills)}></div>
        </section>
        <section onClick={() => changeWindow("projects", page.projects)} className={verifyIconState(page.projects)}>
          <ProjectsIcon width="50%" height="auto" color="white" />
          <div className={verifyOutlineState(page.projects)}></div>
        </section>
      </nav>
    </header>
  )
}

function LandingPageIcon({ color, width, height, nameClass }) {
  return (
    <svg className={nameClass} width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="38" height="38" rx="2" stroke={color} stroke-width="2" />
      <rect x="3.625" y="9.875" width="17.75" height="12.125" rx="2.5" stroke={color} />
      <rect x="26.25" y="11.875" width="10.625" height="1.25" rx="0.625" fill={color} />
      <rect x="26.25" y="18.125" width="10.625" height="1.25" rx="0.625" fill={color} />
      <rect x="26.25" y="15" width="10.625" height="1.25" rx="0.625" fill={color} />
      <rect x="1.25" y="6.25" width="37.5" height="1.25" fill={color} />
      <path d="M4 20.5L7.1875 13.125L10.3125 18.4375L14.375 15L17.1875 18.4375L21.5625 15.3125" stroke={color} />
      <circle cx="6.25" cy="33.125" r="2.625" stroke={color} />
      <circle cx="20" cy="33.125" r="2.625" stroke={color} />
      <circle cx="33.75" cy="33.125" r="2.625" stroke={color} />
    </svg>
  )
}
function SkillsIcon({ color, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M34.0312 21.0938H28.9688V24.4688C28.9426 25.3024 28.9865 25.3395 29.8125 25.3125H33.1875C34.0144 25.3066 34.0346 25.3403 34.0312 24.4688V21.0938ZM34.0312 8.4375C32.2982 8.43834 29.4598 8.4375 28.9688 8.4375V19.4062H34.0312V8.4375ZM31.5 2.3144L28.9688 6.75H34.0312L31.5 2.3144ZM34.0312 27H28.9688C27.9478 27 27.2812 26.3427 27.2812 25.3125V6.57028L30.6562 0.611725C31.1659 -0.173807 31.8341 -0.173807 32.3438 0.611725L35.7188 6.57028V25.3125C35.7188 26.3427 35.0522 26.9992 34.0312 27Z" fill={color} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 3.25C10.6287 3.25 10.125 3.75368 10.125 4.375V6.1545C9.34286 6.47108 8.6158 6.89413 7.96173 7.40536L6.419 6.51467C6.16061 6.36548 5.85353 6.32505 5.56533 6.40227C5.27713 6.4795 5.03142 6.66805 4.88223 6.92644L2.63223 10.8236C2.32157 11.3616 2.50593 12.0497 3.044 12.3604L4.58617 13.2507C4.52934 13.6594 4.50002 14.0765 4.50002 14.5C4.50002 14.9234 4.52934 15.3405 4.58617 15.7493L3.04402 16.6396C2.78561 16.7888 2.59708 17.0345 2.51984 17.3227C2.44262 17.611 2.48305 17.918 2.63223 18.1764L4.88223 22.0735C5.03142 22.3319 5.27714 22.5205 5.56534 22.5977C5.85355 22.6749 6.16061 22.6345 6.41902 22.4854L7.96175 21.5946C8.61583 22.1058 9.34287 22.5289 10.125 22.8455V24.625C10.125 25.2463 10.6287 25.75 11.25 25.75H15.7501C16.3713 25.75 16.8751 25.2463 16.8751 24.625V22.8455C17.6572 22.5289 18.3842 22.1058 19.0383 21.5946L20.581 22.4854C20.8394 22.6345 21.1465 22.6749 21.4347 22.5977C21.7229 22.5205 21.9686 22.3319 22.1178 22.0736L24.3678 18.1765C24.517 17.9181 24.5575 17.611 24.4802 17.3227C24.403 17.0346 24.2144 16.7888 23.956 16.6396L22.4139 15.7493C22.4707 15.3406 22.5001 14.9234 22.5001 14.5C22.5001 14.0765 22.4707 13.6594 22.4139 13.2507L23.956 12.3604C24.4941 12.0496 24.6785 11.3616 24.3678 10.8235L22.1178 6.92642C21.9686 6.66802 21.7229 6.47948 21.4347 6.40225C21.1465 6.32503 20.8394 6.36545 20.581 6.51464L19.0383 7.40534C18.3842 6.89412 17.6572 6.47108 16.8751 6.1545V4.375C16.8751 3.75368 16.3713 3.25 15.7501 3.25H11.25ZM12.3751 6.95109V5.5H14.6251V6.95109C14.6251 7.44881 14.9521 7.88737 15.4291 8.02935C16.4541 8.3344 17.3785 8.87723 18.1376 9.59533C18.4991 9.93727 19.0423 10.0011 19.4732 9.75232L20.7318 9.02569L21.8568 10.9742L20.5998 11.7C20.1692 11.9486 19.9528 12.4504 20.0677 12.9341C20.1867 13.4355 20.2501 13.9597 20.2501 14.5C20.2501 15.0403 20.1867 15.5645 20.0677 16.0659C19.9528 16.5496 20.1692 17.0514 20.5998 17.3L21.8568 18.0257L20.7318 19.9742L19.4731 19.2476C19.0423 18.9989 18.4991 19.0627 18.1375 19.4047C17.3785 20.1227 16.4541 20.6656 15.4291 20.9705C14.9521 21.1125 14.6251 21.5512 14.6251 22.0489V23.5H12.3751V22.0489C12.3751 21.5512 12.0479 21.1125 11.5709 20.9705C10.5459 20.6656 9.62158 20.1227 8.86244 19.4047C8.50095 19.0627 7.95777 18.9989 7.52685 19.2476L6.26829 19.9742L5.14329 18.0257L6.40024 17.3C6.83083 17.0514 7.04716 16.5496 6.93232 16.0659C6.81329 15.5645 6.75002 15.0403 6.75002 14.5C6.75002 13.9597 6.81328 13.4355 6.93232 12.9341C7.04716 12.4504 6.83082 11.9486 6.40024 11.7L5.14329 10.9743L6.26829 9.02573L7.52683 9.75234C7.95776 10.0011 8.50093 9.93728 8.86243 9.59534C9.62156 8.87724 10.5459 8.33441 11.5709 8.02935C12.0479 7.88737 12.3751 7.44881 12.3751 6.95109ZM11.25 14.5C11.25 13.2573 12.2574 12.25 13.5001 12.25C14.7427 12.25 15.7501 13.2573 15.7501 14.5C15.7501 15.7427 14.7427 16.75 13.5001 16.75C12.2574 16.75 11.25 15.7427 11.25 14.5ZM13.5001 10C11.0148 10 9.00004 12.0147 9.00004 14.5C9.00004 16.9852 11.0148 19 13.5001 19C15.9853 19 18.0001 16.9852 18.0001 14.5C18.0001 12.0147 15.9853 10 13.5001 10Z" fill={color} />
    </svg>

  )
}
function ProjectsIcon({ color, width, height }) {
  return (
    <svg width={width} height={height} viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="3" fill="#B3B3B3" />
      <rect x="4" width="40" height="40" rx="3" fill="#DBDBDB" />
      <rect x="9" width="40" height="40" rx="3" fill={color} />
      <rect x="12.375" y="9.875" width="17.75" height="12.125" rx="2.5" stroke="black" />
      <rect x="35" y="11.875" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="11.875" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="11.875" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="18.125" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="18.125" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="18.125" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="15" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="15" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="35" y="15" width="10.625" height="1.25" rx="0.625" fill="black" />
      <rect x="9" y="6" width="40" height="1" fill="black" />
      <path d="M12.75 20.5L15.9375 13.125L19.0625 18.4375L23.125 15L25.9375 18.4375L30.3125 15.3125" stroke="black" />
      <circle cx="15" cy="33.125" r="2.625" stroke="black" />
      <circle cx="28.75" cy="33.125" r="2.625" stroke="black" />
      <circle cx="42.5" cy="33.125" r="2.625" stroke="black" />
    </svg>

  )
}

export default App
