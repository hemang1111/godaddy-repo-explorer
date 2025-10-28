function FolderEyeIcon (props) {
  return (
    <span className={`material-symbols-outlined text-lg cursor-pointer ${props.class}`} onClick={props.onClick} >folder_eye</span>
  )
}

export default FolderEyeIcon