import "./styles.css"

import { useRef, useState } from "react"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import SkillsIcon from "../../../SkillsIcon"

import SkillsNav from "../../../SkillsNav"

import SkillsList from "../../../SkillsList"

import WindowDisplay from "../../WindowDisplay"

import skills from "../../../../SkillsObject"


function Skills() {

  const [currentStack, setCurrentStack] = useState("frontEnd")


  const headerRef = useRef(null)


  function renderIcon() {

    return <SkillsIcon nameClass="icon-window_header" width="11%" height="auto" color="white" />

  }

  function renderContent() {

    return (

      <>
        <SkillsNav currentStack={currentStack} updateStack={setCurrentStack} />
        <SkillsList currentStack={currentStack} data={skills} />
      </>

    )

  }


  return (

    <section ref={headerRef} className='container-landing_page'>
      <Resize window={headerRef} />
      <WindowHeader className="window-header-skills" icon={renderIcon()} name="Habilidades.exe" window={headerRef} currentPage="skills" />
      <WindowDisplay className="window-display-skills" content={renderContent()} />
    </section>

  )


}


export default Skills