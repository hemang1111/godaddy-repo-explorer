function FolderIcon (props) {
  return (
    <span className={`material-symbols-outlined text-lg cursor-pointer ${props.class}`} onClick={props.onClick} >folder</span>
  )
}

export default FolderIcon