import LandingPageIcon from "../LandingPageIcon/index"

import MinimizeIcon from "../MinimizeIcon/index"

import FullscreenIcon from "../FullscreenIcon/index"

import CloseIcon from "../CloseIcon/index"




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


export default ProjectsPage