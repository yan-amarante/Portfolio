import "./styles.css"

import { useRef, useState } from "react"

import Resize from "../../../Resize"

import WindowHeader from "../../WindowHeader"

import WindowDisplay from "../../WindowDisplay"

import ProjectsIcon from "../../../ProjectsIcon"

import skinWarriorsHome from "../../../../assets/ProjectsScreenshots/skinWarriorsHome.png"

import List from "../../../List"

function Projects() {

  const [currentStack, setCurrentStack] = useState("frontEnd")


  const headerRef = useRef(null)


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

  function createListItems() {

    return [

      [
  
        < div className="filter-check" ></div>,
  
        <p>React</p>
  
      ],
  
      [
  
        <div className="filter-check"></div>,
  
        <p>JavaScript</p>
  
      ],
      [
  
        <div className="filter-check"></div>,
  
        <p>TypeScript</p>
  
      ]
  
    ]

  }

  function renderListContent() {

    const listItems = createListItems()

    return listItems

  //   <ul className="filter-list">
  //   <li className="filter-item">
  //     <img className="project-screenshot" src={skinWarriorsHome} alt="" />
  //     <section className="project-info">
  //       <h3>Skin Warriors</h3>
  //     </section>
  //   </li>
  // </ul>

  }

  function renderContent() {

    return (

      <>
        <section className="projects-filter">
          <section className="nav-buttons">
            <button onClick={() => { changeStack("frontEnd") }} className={`button-font ${updateButtonStyle("frontEnd")}`}>Front-end</button>
            <button onClick={() => { changeStack("backEnd") }} className={`button-font ${updateButtonStyle("backEnd")}`}>back-end</button>
          </section>
          <List content={renderListContent()} />
        </section>
        <section className="projects-display">
          <List content={renderListContent()}/>
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