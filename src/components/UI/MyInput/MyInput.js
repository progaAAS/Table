import s from './MyInput.module.css';

const MyInput = ({ label, onChange, value}) => {
   
  return(
    <div className={s.form_item}>
      <input type="text" placeholder={label} onChange={onChange} value={value} className={s.form_input}/>
    </div>
  )
}

export default MyInput;
