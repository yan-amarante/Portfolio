import "./styles.css"

import { useRef } from "react"

import LandingPageIcon from "../../../LandingPageIcon"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import WindowDisplay from "../../WindowDisplay"

import { PageContext } from "../../../../Context/pageContext"

import { useContext, useEffect } from 'react'


function Landing() {

  const { page, setPage } = useContext(PageContext)

  const headerRef = useRef(null)

  useEffect(()=>{
    fetch("https://api-pro-p8wr.onrender.com/projects")
  },[])


  function renderIcon() {

    return <LandingPageIcon className="icon-window_header landing-page-header" />

  }

  function openWindow(pageToOpen) {

    setPage({ ...page, [pageToOpen]: { isActive: true, isFullscreen: false, isClosed: false },  ["landing"]: { isActive: false, isFullscreen: false, isClosed: true }})

  }

  function renderContent() {

    return (
      <>
        <article className='presentation-text'>
          <h3 className='h3-landing_page'>Olá, me chamo</h3>
          <h2 className='h2-landing_page'>Yan Amarante</h2>
          <p className='paragraph-landing_page'>Sempre busco prover novas ideias e executa-las com a maior qualidade possível</p>
        </article>
        <button onClick={() => openWindow("skills")} className="landing-page-button">Habilidades</button>
        <button onClick={() =>openWindow("projects")} className="landing-page-button">Projetos</button>
      </>
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