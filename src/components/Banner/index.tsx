import './styles.css';
type Props = {
  backgroundColor: string;
  backgroundImage: string;
  fontColor: string;
  subtitle: string;
  title: string;
  content: string;
  footerContent?: string;
  buttonType: string;
  buttonContent?: string;
}


export const Banner = (props: Props) => {
  return (
    <div className="banner-container" style={
      {
        backgroundColor: props.backgroundColor,
        backgroundImage: `url(${props.backgroundImage})`,
        color: props.fontColor
      }}>
      <span className="banner-subtitle">{props.subtitle}</span>
      <h3 className="banner-title">{props.title}</h3>
      <p className="banner-content">{props.content}</p>

      {props.buttonType === 'normal' ?
        <button className="banner-normal-btn">{props.buttonContent}</button>
        :
        <>
          <button className="banner-appstore-btn"></button>
          <button className="banner-playstore-btn"></button>
        </>
      }

      {props.footerContent &&
        <span className="banner-footer-content">{props.footerContent}</span>
      }
    </div>
  );
}