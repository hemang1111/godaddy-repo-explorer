function RefreshIcon (props) {
  return (
    <span className={`material-symbols-outlined text-lg cursor-pointer ${
        props.listRepoShimmer ? 'animate-spin' : ''
      } ${props.class}`} onClick={props.onClick} >refresh</span>
  )
}

export default RefreshIcon