import LandingPageIcon from "../LandingPageIcon/index"

import MinimizeIcon from "../MinimizeIcon/index"

import FullscreenIcon from "../FullscreenIcon/index"

import CloseIcon from "../CloseIcon/index"




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


export default SkillsPage