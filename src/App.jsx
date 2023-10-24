import './App.css'

function App() {

  return (
    <section className='container'>
      <Header/>
      <Home/>
    </section>
  )
}

function Home () {
  return(
    <main className='container-home'>
      <h2>Home</h2>
    </main>
  )
}


function Header () {
  return(
    <header className='container-header'>
      <h2>Yan Amarante</h2>
    </header>
  )
}

export default App
