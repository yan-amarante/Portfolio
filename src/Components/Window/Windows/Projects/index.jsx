import "./styles.css"

import { useRef, useState, useEffect } from "react"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import WindowDisplay from "../../WindowDisplay"

import ProjectsIcon from "../../../ProjectsIcon"

import skinWarriorsHome from "../../../../assets/ProjectsScreenshots/skinWarriorsHome.png"

import List from "../../../List"


const API_PROJECTS = "https://api-pro-p8wr.onrender.com/projects/"


function Projects() {

  const [currentStack, setCurrentStack] = useState("frontEnd")

  const [projects, setProjects] = useState(null)


  const headerRef = useRef(null)


  useEffect(() => {

    fetchProjects()

  }, [])


  async function fetchProjects() {

    const response = await fetch(API_PROJECTS)

    const data = await response.json()


    const projectsArray = []

    for (var key in data.projects) {

      projectsArray.push(data.projects[key])

    }


    setProjects(projectsArray)

  }

  function renderIcon() {

    return <ProjectsIcon nameClass="icon-window_header" width="11%" height="auto" color="white" />

  }

  function changeStack(stack) {

    if (currentStack !== stack) setCurrentStack(stack)

  }

  function updateButtonStyle(stack) {

    const activeClassName = "button-active"

    const disabledClassName = "button-disabled"


    if (stack === currentStack) return activeClassName

    else return disabledClassName

  }

  function renderListContent(type) {

    if (type === "projects") {

      if (projects !== null) return projects


    }

  }

  function renderContent() {

    return (

      <>
        <section className="projects-filter">
          <section className="nav-buttons">
            <button onClick={() => { changeStack("frontEnd") }} className={`button-font ${updateButtonStyle("frontEnd")}`}>Front-end</button>
            <button onClick={() => { changeStack("backEnd") }} className={`button-font ${updateButtonStyle("backEnd")}`}>back-end</button>
          </section>
        </section>
        <section className="projects-display">
          <ul className="filter-list">
            <List content={renderListContent("projects")} hasNestedArray={false} />
          </ul>
        </section>
      </>
    )

  }


  return (

    <section ref={headerRef} className='container-projects'>
      <Resize window={headerRef} />
      <WindowHeader className="window-header-projects" icon={renderIcon()} name="Projetos.exe" window={headerRef} currentPage="projects" />
      <WindowDisplay className="window-display-projects" content={renderContent()} />
    </section>

  )


}


export default Projects