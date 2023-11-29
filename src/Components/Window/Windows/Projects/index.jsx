import { useRef } from "react"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import WindowDisplay from "../../WindowDisplay"

import ProjectsIcon from "../../../ProjectsIcon"

function Projects() {

  const headerRef = useRef(null)


  function renderIcon() {

    return <ProjectsIcon nameClass="icon-window_header" width="11%" height="auto" color="white" />

  }

  function renderContent() {

    return (

      <h2>PROJETOS</h2>

    )

  }


  return (

    <section ref={headerRef} className='container-landing_page'>
      <Resize window={headerRef} />
      <WindowHeader className="window-header-landing" icon={renderIcon()} name="Projetos.exe" window={headerRef} currentPage="projects" />
      <WindowDisplay className="window-display-landing" content={renderContent()} />
    </section>

  )


}


export default Projects