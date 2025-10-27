import { Placeholder } from 'rsuite'

function RepoShimmer() {
    try{
        return (
          <div className='w-full sm:w-[48%] lg:w-[32%] border-2 rounded-md min-h-[auto] overflow-y-hidden p-1 '>
              <div className='font-medium text-lg border-b-2 cursor-pointer'><Placeholder.Graph active height={'15px'}/></div>
              <div className='font-normal text-sm py-1 mt-1'><Placeholder.Graph active height={'20px'}/></div>
          </div>
        )
    }
    catch(e){
        console.log(e)
        return <></>
    }
}

export default RepoShimmer