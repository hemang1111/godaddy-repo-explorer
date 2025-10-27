import { useEffect, useState } from 'react'
import Repolist from './Component/Repolist'
import { listData  } from './config'
import { useSelector, useDispatch } from 'react-redux'
import { setRepo } from './redux/RepoListSlice'
import NoData from './Component/NoData'
import './App.css'

function App() {

  const [listRepoShimmer, setListRepoShimmer] = useState(false)

  const { repoList } = useSelector((state) => state.repolist);
  const dispatch = useDispatch()

  const fetchData = async () =>{
    let res = await listData('https://api.github.com/orgs/godaddy/repos')
    if (res?.data?.length) {
      dispatch(setRepo(res?.data))
      setListRepoShimmer(false)
    }

  }
  
  useEffect(() => {
    setListRepoShimmer(true)
    fetchData()
  }, [])

  return (
    <>
      <div className='p-4'>
        {
          !listRepoShimmer && !repoList.length ?
            <NoData />
            :
            <div >
              <Repolist fetchData={fetchData} listRepoShimmer={listRepoShimmer} setListRepoShimmer={setListRepoShimmer}/>
            </div>
        }
      </div>
    </>
  )
}

export default App
