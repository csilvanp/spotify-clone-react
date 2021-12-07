import './styles.css';
type Props = {
  backgroundColor: string;
  backgroundImage: string;
  backgroundPos?: string;
  backgroundSize?: string;
  fontColor: string;
  subtitle: string;
  title: string;
  content: string;
  footerContent?: string;
  footerLink?: string;
  buttonType: string;
  buttonContent?: string;
}


export const Banner = (props: Props) => {
  return (
    <div className="banner-container" style={
      {
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        color: props.fontColor,
        backgroundPosition: props.backgroundPos,
        backgroundSize: props.backgroundSize
      }}>
      <div className="banner-content-container">
        <span className="banner-subtitle">{props.subtitle}</span>
        <h3 className="banner-title">{props.title}</h3>
        <p className="banner-content">{props.content}</p>

        {props.buttonType === 'normal' ?
          <button className="banner-normal-btn" style={{ backgroundColor: props.fontColor, color: props.backgroundColor }}>{props.buttonContent}</button>
          :
          <div style={{ display: 'flex', alignItems: "center", marginBottom: '5vh' }}>
            <img className="banner-store-btn" src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-pt.svg" />
            <img className="banner-store-btn" src="https://www-growth.scdn.co/static/badges/svgs/google/badge-pt.svg" />
          </div>
        }

        {props.footerContent &&
          <span className="banner-footer-content">{props.footerContent}</span>
        }

        {props.footerLink &&
          <a className="banner-footer-link" href="https://open.spotify.com/genre/2021-page" style={{ color: props.fontColor }}>{props.footerLink}</a>
        }
      </div>
    </div>
  );
}