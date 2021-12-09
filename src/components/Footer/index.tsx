import './styles.css';
import { MenuFooter } from './MenuFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Footer Logo" />

        <MenuFooter title="Empresa" arrMenu={['Sobre', 'Empregos', "For The Record"]} />
        <MenuFooter title="Comunidades" arrMenu={['Para Artistas', 'Desenvolvedores', "Publicidade", 'Investidores', 'Fornecedores']} />
        <MenuFooter title="Links Úteis" arrMenu={['Suporte', 'Player da Web', "Aplicativo móvel grátis"]} />

        <div className='footer-social'>
          <FontAwesomeIcon icon={faInstagram} size='2x' className='round-icon' />
          <FontAwesomeIcon icon={faTwitter} size='2x' className='round-icon' />
          <FontAwesomeIcon icon={faFacebookF} size='2x' className='round-icon' />
        </div>
      </div>
      <div className='footer-footer'>
        <MenuFooter type="row" arrMenu={['Legal', 'Centro de Privacidade', 'Política de Privacidade', 'Cookies', 'Sobre anúncios']} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span>Brasil</span>
          <span>© 2021 Spotify AB</span>
        </div>
      </div>
    </div>
  )
}