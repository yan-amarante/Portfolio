import './App.css'

import { useContext } from 'react'

import { PageContext } from "./Context/pageContext.jsx"

import Header from "./Components/Header/index.jsx"

import Landing from "./Components/Window/Windows/Landing"

import Skills from "./Components/Window/Windows/Skills"

import Projects from "./Components/Window/Windows/Projects"




function App() {


  const { page, setPage } = useContext(PageContext)




  return (

    <main className='container'>
      {(page.landing.isActive ?
        <Landing />
        :
        null
      )}
      {(page.skills.isActive ?
        <Skills />
        :
        null
      )}
      {(page.projects.isActive ?
        <Projects />
        :
        null
      )}
      <Header />
    </main>

  )


}


export default App
