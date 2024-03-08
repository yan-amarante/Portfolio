import "./styles.css"

import { useRef, useState, useEffect } from "react"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import SkillsIcon from "../../../SkillsIcon"

import SkillsNav from "../../../SkillsNav"

import SkillsList from "../../../SkillsList"

import WindowDisplay from "../../WindowDisplay"


function Skills() {

  const [currentStack, setCurrentStack] = useState("frontEnd")

  const [skillsList, setSkillsList] = useState(null)


  const headerRef = useRef(null)


  useEffect(() => {

    listSkills()

  }, [])


  async function listSkills() {

    const response = await fetch("https://api-pro-p8wr.onrender.com/skills/")

    const data = await response.json()

    updateSkillsList(data.skills)

  }

  function updateSkillsList(data) {

    let skills = []

    Object.values(data).forEach((skill) => skills.push(skill))

    setSkillsList(skills)

  }

  function renderIcon() {

    return <SkillsIcon className="icon-window_header" color="white" />

  }

  function renderListData() {

    if (skillsList !== null) return skillsList

    else return null

  }

  function renderContent() {

    return (

      <>
        <SkillsNav currentStack={currentStack} updateStack={setCurrentStack} />
        {skillsList ? <SkillsList currentStack={currentStack} data={renderListData()} /> : <div className="spinner-load"></div>}
      </>

    )

  }


  return (

    <section ref={headerRef} className='container-landing_page'>
      {/*<Resize window={headerRef} />*/}
      <WindowHeader className="window-header-skills" icon={renderIcon()} name="Habilidades.exe" window={headerRef} currentPage="skills" />
      <WindowDisplay className="window-display-skills" content={renderContent()} />
    </section>

  )


}


export default Skills