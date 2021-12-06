import { Header } from './components/Header';
import { Banner } from './components/Banner';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        backgroundColor="#96f0b6"
        backgroundImage="https://i.scdn.co/image/ab671c3d0000f430143da573d752a8cc11ca120e"
        fontColor="#202f72"
        subtitle="Spotify Premium"
        title="Curta 3 meses de Premium grátis"
        content="Curta músicas sem anúncios, ouça no modo offline e muito mais. Cancele quando quiser."
        buttonType="normal"
        buttonContent="Aproveite 3 meses grátis"
      />
    </div>
  )
}

export default App
