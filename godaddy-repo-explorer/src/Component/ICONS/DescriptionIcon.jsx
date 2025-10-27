function DescriptionIcon (props) {
  return (
    <span className={`material-symbols-outlined text-lg cursor-pointer ${props.class}`} onClick={props.onClick} >description</span>
  )
}

export default DescriptionIcon