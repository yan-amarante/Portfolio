import { useState, useEffect, useRef } from "react"

import LandingPageIcon from "../LandingPageIcon/index"

import MinimizeIcon from "../MinimizeIcon/index"

import FullscreenIcon from "../FullscreenIcon/index"

import CloseIcon from "../CloseIcon/index"




function LandingPage() {


  const [headerPressed, setHeaderPressed] = useState(false)

  const [windowPressed, setWindowPressed] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const [size, setSize] = useState({ width: 0, height: 0 })




  const headerRef = useRef(null)




  useEffect(() => {


    moveWindow()


  }, [position])

  useEffect(() => {


    setSize({ width: headerRef.current.clientWidth, height: headerRef.current.clientHeight })


  }, [])




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


    } else if (windowPressed && movementX <= 0 && movementY >= 0) {


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


export default LandingPage