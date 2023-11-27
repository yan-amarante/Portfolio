import './App.css'

import { useContext } from 'react'

import { PageContext } from "./Context/pageContext.jsx"

import Header from "./Components/Header/index.jsx"

import LandingPage from "./Components/LandingPage/index.jsx"

import SkillsPage from "./Components/SkillsPage/index.jsx"

import ProjectsPage from "./Components/ProjectsPage/index.jsx"




function App() {


  const { page, setPage } = useContext(PageContext)




  return (

    <main className='container'>
      {(page.landing.isActive ?
        <LandingPage />
        :
        null
      )}
      {(page.skills.isActive ?
        <SkillsPage />
        :
        null
      )}
      {(page.projects.isActive ?
        <ProjectsPage />
        :
        null
      )}
      <Header />
    </main>

  )


}


export default App
