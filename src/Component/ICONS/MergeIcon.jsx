function MergeIcon (props) {
  return (
    <span className={`material-symbols-outlined text-lg cursor-pointer ${props.class}`} onClick={props.onClick} >merge</span>
  )
}

export default MergeIcon