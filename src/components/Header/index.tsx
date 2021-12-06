import './styles.css';

export const Header = () => {
  return (
    <div className="header-bar">
      <img className="header-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />

      <ul className="header-menu">
        <li>Premium</li>
        <li>Suporte</li>
        <li>Baixar</li>
        <span className="menu-vb"></span>
        <li>Inscrever-se</li>
        <li>Entrar</li>
      </ul>
    </div>
  );
}