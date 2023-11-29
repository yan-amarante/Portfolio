import "./styles.css"

import { useRef, useState } from "react"

import Resize from "../Resize/index"

import WindowHeader from "../Window/WindowHeader"

import SkillsIcon from "../SkillsIcon/index"

import SkillsNav from "../SkillsNav"

import SkillsList from "../SkillsList"

import ReactIcon from "../Icons/SkillsIcons/ReactIcon"

import JavaScriptIcon from "../Icons/SkillsIcons/JavaSriptIcon"

import TypeScriptIcon from "../Icons/SkillsIcons/TypeScriptIcon"

import CssIcon from "../Icons/SkillsIcons/CssIcon"

import HtmlIcon from "../Icons/SkillsIcons/HtmlIcon"

import NodeIcon from "../Icons/SkillsIcons/NodeIcon"

import ExpressIcon from "../Icons/SkillsIcons/ExpressIcon"

import PostgresqlIcon from "../Icons/SkillsIcons/PostgresqlIcon"

import CypressIcon from "../Icons/SkillsIcons/CypressIcon"



function SkillsPage() {

  const [currentStack, setCurrentStack] = useState("frontEnd")

  const [skills, setSkills] = useState({

    frontEnd: [

      {

        id: 1,

        name: "React DOM",

        icon: <ReactIcon />,

      },

      {

        id: 2,

        name: "React Native",

        icon: <ReactIcon />,

      },

      {

        id: 3,

        name: "JavaScript",

        icon: <JavaScriptIcon />,

      },

      {

        id: 4,

        name: "TypeScript",

        icon: <TypeScriptIcon />,

      },

      {

        id: 5,

        name: "CSS",

        icon: <CssIcon />,

      },

      {

        id: 6,

        name: "HTML",

        icon: <HtmlIcon />,

      },

    ],

    backEnd: [

      {

        id: 1,

        name: "Node",

        icon: <NodeIcon />,

      },

      {

        id: 2,

        name: "Express",

        icon: <ExpressIcon />,

      },

      {

        id: 3,

        name: "PostgreSQL",

        icon: <PostgresqlIcon />,

      }

    ],

    test: [

      {

        id: 1,

        name: "Cypress",

        icon: <CypressIcon />,

      },

    ]

  })

  const headerRef = useRef(null)


  function returnIcon() {

    return <SkillsIcon nameClass="icon-window_header" width="11%" height="auto" color="white" />

  }


  return (

    <section ref={headerRef} className='container-landing_page'>
      <Resize window={headerRef} />
      <WindowHeader className="window-header-skills" icon={returnIcon()} name="Habilidades.exe" window={headerRef} />
      <section className='window-display-skills'>
        <SkillsNav currentStack={currentStack} updateStack={setCurrentStack} />
        <SkillsList currentStack={currentStack} data={skills} />
      </section>
    </section>

  )


}


export default SkillsPage