import "./styles.css"

import { useRef } from "react"

import LandingPageIcon from "../../../LandingPageIcon"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import WindowDisplay from "../../WindowDisplay"


function Landing() {

  const headerRef = useRef(null)


  function renderIcon() {

    return <LandingPageIcon nameClass="icon-window_header" width="11%" height="auto" color="black" />

  }

  function renderContent() {

    return (

      <article className='presentation-text'>
        <h3 className='h3-landing_page'>Olá, me chamo</h3>
        <h2 className='h2-landing_page'>Yan Amarante</h2>
        <p className='paragraph-landing_page'>Sou capaz de desenvolver lindas interfaces no front-end e APIs
          rapidas e seguras no back-end</p>
      </article>

    )

  }


  return (

    <section ref={headerRef} className='container-landing_page'>
      <Resize window={headerRef} />
      <WindowHeader className="window-header" icon={renderIcon()} name="Apresentação.exe" window={headerRef} currentPage="landing" />
      <WindowDisplay className="window-display-landing" content={renderContent()} />
    </section>

  )


}


export default Landing