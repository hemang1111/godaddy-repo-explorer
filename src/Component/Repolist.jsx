import React, { useMemo, useState } from 'react'
import { useSelector  } from 'react-redux'
import RepoCard from './RepoCard';
import RefreshIcon from './ICONS/RefreshIcon'
import DescriptionIcon from './ICONS/DescriptionIcon'
import LanguageIcon from './ICONS/LanguageIcon'
import MergeIcon from './ICONS/MergeIcon'
import BugIcon from './ICONS/BugIcon'
import FolderEyeIcon from './ICONS/FolderEyeIcon'
import NoData from './NoData';
import DrawerRsuite from './DrawerRsuite';
import TooltipRsuite from './TooltipRsuite';
import RepoShimmer from './RepoShimmer';

function Repolist({ fetchData, listRepoShimmer , setListRepoShimmer}) {

    const { repoList } = useSelector((state) => state.repolist);

    const [serchValue, setSearchValue] = useState('')
    const [openDrawer, setOpenDrawer] = useState({})

    const handleChange = (value = '') => {
        setSearchValue(value)
    }

    const handleDrawer = (repo) => {
        setOpenDrawer(repo)
    }

    // filter repo from search query
    const finalRepoList = useMemo(() => {
        return repoList.filter((r) => r?.name?.toLowerCase()?.includes(serchValue?.toLowerCase()?.trim()) || r?.description?.toLowerCase()?.includes(serchValue?.toLowerCase()?.trim()))
    }, [repoList, serchValue])

    try {
        return (
            <>
                <div className='w-[100%]'>
                    <div className='flex justify-center m-2 p-2'>
                        <input data-testid="search-input" disabled={listRepoShimmer} className='min-w-[50%] w-auto p-1 rounded-md border border-[var(--godaddy-blue)] focus:outline focus:outline-5 outline-[var(--godaddy-blue)]' title="Search repo name / descripiton" placeholder='Search repo name / descripiton' value={serchValue} onChange={listRepoShimmer ? ()=>{} : (e) => { handleChange(e.target?.value) }} />
                        <TooltipRsuite tooltipcontent="Refresh" placement="top">
                            <div className={`ml-2 bg-[var(--godaddy-blue)] rounded-md `} 
                            data-testid="refresh-btn"
                                onClick={
                                    listRepoShimmer ?
                                    ()=>{}
                                    :
                                    async () => {
                                        setListRepoShimmer(true)
                                        await fetchData()
                                    }
                                } 
                            >
                                <RefreshIcon class={`text-white  px-2 py-1 ${listRepoShimmer ? 'cursor-not-allowed': ''}`}  listRepoShimmer={listRepoShimmer} />
                            </div>
                        </TooltipRsuite>
                    </div>
                    <div className='flex flex-wrap justify-start gap-5'>
                        {
                            serchValue.length && !finalRepoList.length ?
                                <div className='flex justify-center w-[100%]'>
                                    <NoData height="h-64" width="w-64" message='No Repo Found :(' />
                                </div>
                                :

                                listRepoShimmer ?
                                    <>
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                        <RepoShimmer />
                                    </>
                                :

                                finalRepoList?.map((repo, index) => {
                                    return (
                                        <RepoCard repo={repo} handleDrawer={handleDrawer} openDrawer={openDrawer} key={repo.id} />
                                    )
                                })
                        }
                    </div>
                </div>

                {/********************************* Repo Detail Drawer Start **********************************/}
                <DrawerRsuite
                    open={Object.keys(openDrawer).length}
                    size="xs"
                    onClose={() => { setOpenDrawer({}) }}
                    className="p-0"
                    testid="repo-drawer"
                    header={
                        <div className='flex items-center justify-start truncate'>
                            <div className='text-sm text-gray-700 min-w-[60px]'>Details of</div>
                            <TooltipRsuite tooltipcontent={openDrawer.name} placement="bottom">
                                <div className='font-semibold ml-1 text-lg truncate'>{`${openDrawer.name}`}</div>
                            </TooltipRsuite>
                        </div>
                        }
                    body={
                        <>
                            <div className='w-[100%] font-normal text-md' >
                                {/********************************* Description Start **********************************/}
                                <div className='flex border-b border-gray-200'>
                                    <TooltipRsuite tooltipcontent="Description" placement="top">
                                        <div className='text-[var(--godaddy-blue)]'><DescriptionIcon /></div>
                                    </TooltipRsuite>
                                    <div className='ml-2'>{openDrawer.description}</div>
                                </div>
                                {/********************************* Description End **********************************/}

                                {/********************************* Language Start **********************************/}
                                <div className='flex mt-2 border-b border-gray-200'>
                                    <TooltipRsuite tooltipcontent="Language(s)" placement="top">
                                        <div className='text-[var(--godaddy-blue)]'><LanguageIcon /></div>
                                    </TooltipRsuite>
                                    <a className='ml-2 cursor-pointer underline text-[var(--godaddy-blue)]' href={openDrawer.languages_url} target="_blank">{`${openDrawer?.name}'s Language(s)`}</a>
                                </div>
                                {/********************************* Language End **********************************/}

                                {/********************************* Fork Start **********************************/}
                                <div className='flex mt-2 border-b border-gray-200'>
                                    <TooltipRsuite tooltipcontent="Merge(s)" placement="top">
                                        <div className='text-[var(--godaddy-blue)]'><MergeIcon /></div>
                                    </TooltipRsuite>
                                    <div className='ml-2'>{`${openDrawer.forks_count} Fork(s)`}</div>
                                </div>
                                {/********************************* Fork End **********************************/}

                                {/********************************* Issue Start **********************************/}
                                <div className='flex mt-2 border-b border-gray-200'>
                                    <TooltipRsuite tooltipcontent="Issue(s)" placement="top">
                                        <div className='text-[var(--godaddy-blue)]'><BugIcon /></div>
                                    </TooltipRsuite>
                                    <div className='ml-2'>{`${openDrawer.open_issues} Issue(s)`}</div>
                                </div>
                                {/********************************* Issue End **********************************/}

                                {/********************************* Watcher Start **********************************/}
                                <div className='flex mt-2'>
                                    <TooltipRsuite tooltipcontent="Watchers(s)" placement="top">
                                        <div className='text-[var(--godaddy-blue)]'><FolderEyeIcon /></div>
                                    </TooltipRsuite>
                                    <div className='ml-2'>{`${openDrawer.watchers} Watcher(s)`}</div>
                                </div>
                                {/********************************* Issue End **********************************/}
                            </div>
                        </>
                    }
                />
                {/********************************* Repo Detail Drawer End **********************************/}
            </>

        )
    }
    catch (e) {
        console.log(e)
        return <></>
    }

}

export default Repolist