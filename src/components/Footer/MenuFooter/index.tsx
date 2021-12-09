import './styles.css';

type Props = {
  type?: string;
  title?: string;
  arrMenu: Array<string>
}

export const MenuFooter = ({ type, title, arrMenu }: Props) => {
  return (
    <ul className={`menu-footer ${type}`}>
      <span>{title}</span>
      {arrMenu.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}