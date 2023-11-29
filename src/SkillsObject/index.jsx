import ReactIcon from "../Components/Icons/SkillsIcons/ReactIcon"

import JavaScriptIcon from "../Components/Icons/SkillsIcons/JavaSriptIcon"

import TypeScriptIcon from "../Components/Icons/SkillsIcons/TypeScriptIcon"

import CssIcon from "../Components/Icons/SkillsIcons/CssIcon"

import HtmlIcon from "../Components/Icons/SkillsIcons/HtmlIcon"

import NodeIcon from "../Components/Icons/SkillsIcons/NodeIcon"

import ExpressIcon from "../Components/Icons/SkillsIcons/ExpressIcon"

import PostgresqlIcon from "../Components/Icons/SkillsIcons/PostgresqlICon"

import CypressIcon from "../Components/Icons/SkillsIcons/CypressIcon"


const skills = {

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

}


export default skills
