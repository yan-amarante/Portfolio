import "./styles.css"

import { useState, useEffect, useRef } from "react"

import LandingPageIcon from "../LandingPageIcon/index"

import MinimizeIcon from "../MinimizeIcon/index"

import FullscreenIcon from "../FullscreenIcon/index"

import CloseIcon from "../CloseIcon/index"

import DiagonalResizeHitbox from "../DiagonalResizeHitbox/index"

import HorizontalResizeHitbox from "../HorizontalResizeHitbox/index"

import VerticalResizeHitbox from "../VerticalResizeHitbox/index"


function LandingPage() {


  const [headerPressed, setHeaderPressed] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })


  const headerRef = useRef(null)


  useEffect(() => {

    moveWindow()

  }, [position])


  function moveWindow() {

    if (headerRef.current) {

      headerRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`

    }

  }

  function onMouseMove(event) {

    if (headerPressed) {

      setPosition({

        x: position.x + event.movementX,
        y: position.y + event.movementY

      })

    }

  }


  return (

    <main ref={headerRef} className='container-landing_page'>
      <DiagonalResizeHitbox positionY="top" positionX="left" headerRef={headerRef} />
      <HorizontalResizeHitbox positionX="left" headerRef={headerRef} />
      <HorizontalResizeHitbox positionX="right" headerRef={headerRef} />
      <VerticalResizeHitbox positionY="top" headerRef={headerRef} />
      <VerticalResizeHitbox positionY="bottom" headerRef={headerRef} />
      <DiagonalResizeHitbox positionY="top" positionX="right" headerRef={headerRef} />
      <DiagonalResizeHitbox positionY="bottom" positionX="left" headerRef={headerRef} />
      <DiagonalResizeHitbox positionY="bottom" positionX="right" headerRef={headerRef} />
      <header
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


export default LandingPage