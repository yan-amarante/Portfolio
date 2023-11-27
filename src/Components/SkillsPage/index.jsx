import "./styles.css"

import { useState, useEffect, useRef } from "react"

import SkillsIcon from "../SkillsIcon/index"

import MinimizeIcon from "../MinimizeIcon/index"

import FullscreenIcon from "../FullscreenIcon/index"

import CloseIcon from "../CloseIcon/index"

import Resize from "../Resize/index"

import FrontEndIcon from "../Icons/SkillsNavIcons/FrontEndIcon/index"

import BackEndIcon from "../Icons/SkillsNavIcons/BackEndIcon/index"

import TestIcon from "../Icons/SkillsNavIcons/TestIcon/index"

import ReactIcon from "../Icons/SkillsIcons/ReactIcon/index"


function SkillsPage() {

  const [headerPressed, setHeaderPressed] = useState(false)

  const [position, setPosition] = useState({ x: 0, y: 0 })


  const headerRef = useRef(null)

  const header = useRef(null)


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

    <section ref={headerRef} className='container-landing_page'>
      <Resize window={headerRef} />
      <header
        ref={header}
        onMouseMove={onMouseMove}
        onMouseDown={() => setHeaderPressed(true)}
        onMouseUp={() => setHeaderPressed(false)}
        className='window-header'>
        <section className='window_header-infos'>
          <SkillsIcon nameClass="icon-window_header" width="11%" height="auto" color="black" />
          <h5 className='name-window'>Habilidades.exe</h5>
        </section>
        <section className='window-controls'>
          <MinimizeIcon currentPage="landing" />
          <FullscreenIcon currentPage="landing" />
          <CloseIcon currentPage="landing" />
        </section>
      </header>
      <section className='window-display-skills'>
        <nav className="nav-skills-window">
          <ul className="nav-list-skills-window">
            <li className="nav-list-items">
              <FrontEndIcon />
              <h3 className="nav-list-text">Front-end</h3>
            </li>
            <li className="nav-list-items">
              <BackEndIcon />
              <h3 className="nav-list-text">Back-end</h3>
            </li>
            <li className="nav-list-items">
              <TestIcon />
              <h3 className="nav-list-text">Testes</h3>
            </li>
          </ul>
        </nav>
        <section>
          <ul className="skills-list">
            <li className="skills-list-item">
              <ReactIcon />
              <h2 className="skills-list-text">React</h2>
            </li>
          </ul>
        </section>
      </section>
    </section>

  )


}


export default SkillsPage