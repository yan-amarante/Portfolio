import './App.css'
import { Player } from "@lottiefiles/react-lottie-player";

function App() {

  return (
    <section className='container'>
      <Header />
      <Home />
    </section>
  )
}

function Home() {
  return (
    <main className='container-home'>
      <article className='artigo-home'>
        <h1 className='titulo-home'>Teste Titulo</h1>
        <p className='descricao-home'>Teste descrição descrição</p>
      </article>
      <Player
        src="https://assets-v2.lottiefiles.com/a/5017fc96-1177-11ee-b93e-0b578c668bf6/f95gEUFQZt.json"
        loop
        autoplay
        speed={0.5}
        style={{ height: "50%", width: "50%" }}
      />
    </main>
  )
}


function Header() {
  return (
    <header className='container-header'>
      <h2 className='titulo-header'>Yan Amarante</h2>
    </header>
  )
}

export default App
