import s from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
  return(
    <button {...props} className={s.button}>{children}</button>
  )
}

export default MyButton;
