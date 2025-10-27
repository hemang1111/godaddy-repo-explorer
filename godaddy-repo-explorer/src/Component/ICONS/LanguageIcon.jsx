function LanguageIcon (props) {
  return (
    <span className={`material-symbols-outlined text-lg cursor-pointer ${props.class}`} onClick={props.onClick} >language</span>
  )
}

export default LanguageIcon