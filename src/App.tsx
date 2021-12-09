import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
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
        backgroundSize="25rem"
        backgroundPos="85% 50%"
        footerContent="Somente no plano Individual. Depois, é só R$ 19,90/mês. 
        Sujeito a Termos e Condições. Disponível apenas para usuários que nunca assinaram o Premium.
        Oferta válida até 31 de dezembro de 2021."
      />
      <Banner
        backgroundColor="#F46EBE"
        backgroundImage="https://www-growth.scdn.co/static/home/wrapped-homepage-banner-graphic-tablet-mobile.svg"
        fontColor="#202f72"
        subtitle="#RetrospectivaSpotify"
        title="A Retrospectiva 2021 chegou"
        content="Mas só está disponível no app Spotify. Baixe agora para descobrir mais."
        buttonType="store"
        backgroundSize="1200px"
        backgroundPos="800px -100%"
        footerLink="Ouça os destaques de 2021 aqui"
      />
      <Banner
        backgroundColor="rgb(41, 65, 171)"
        backgroundImage="https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg"
        fontColor="#1ed760"
        subtitle="Spotify Free"
        title="Escutar muda tudo"
        content="Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito."
        buttonType="normal"
        buttonContent="Baixe o Spotify Free"
        backgroundSize="1500px"
        backgroundPos="100% 0%"
      />

      <Footer/>
    </div>
  )
}

export default App
