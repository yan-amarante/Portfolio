import "./styles.css"

import { useRef } from "react"

import LandingPageIcon from "../../../LandingPageIcon"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import WindowDisplay from "../../WindowDisplay"


function Landing() {

  const headerRef = useRef(null)


  function renderIcon() {

    return <LandingPageIcon className="icon-window_header" color="white" />

  }

  function renderContent() {

    return (

      <article className='presentation-text'>
        <h3 className='h3-landing_page'>Olá, me chamo</h3>
        <h2 className='h2-landing_page'>Yan Amarante</h2>
        <p className='paragraph-landing_page'>Sou um desenvolvedor que está sempre em busca de melhorar e aprender novos conceitos e tecnologias </p>
      </article>

    )

  }


  return (

    <section ref={headerRef} className='container-landing_page'>
      {/*<Resize window={headerRef} />*/}
      <WindowHeader className="window-header" icon={renderIcon()} name="Apresentação.exe" window={headerRef} currentPage="landing" />
      <WindowDisplay className="window-display-landing" content={renderContent()} />
    </section>

  )


}


export default Landing