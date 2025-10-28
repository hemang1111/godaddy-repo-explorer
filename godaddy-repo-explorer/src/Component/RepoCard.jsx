import FolderIcon from './ICONS/FolderIcon'
import TooltipRsuite from './TooltipRsuite'

function RepoCard({repo , handleDrawer , openDrawer}) {
  try{
      return (
        <div onClick={()=>{handleDrawer(repo)}} data-testid={`repo-card-${repo.id}`}  className={` hover:shadow-md transition-all duration-300 cursor-pointer w-full sm:w-[48%] lg:w-[32%]  min-h-[auto] max-h-[60px] overflow-y-hidden p-1 rounded-md ${openDrawer.id == repo.id ? 'outline outline-3 outline-[var(--godaddy-blue-100)]': 'border-2 '}`}>
            <TooltipRsuite tooltipcontent={repo.name} placement="top">
                <div className='font-medium text-lg border-b-2 border-gray-200 flex justify-start items-start' >
                    <div><FolderIcon class='h-2 text-[var(--godaddy-blue)]'/></div>
                    <div className='ml-1 text-[var(--godaddy-blue)] truncate '>{repo.name}</div>
                </div>
            </TooltipRsuite>
            <div className='font-normal text-sm text-gray-600 truncate'>{repo.description || 'N/A'}</div>
        </div>
      )
  }
  catch(e){
    console.log(e)
    return <></>
  }
}

export default RepoCard