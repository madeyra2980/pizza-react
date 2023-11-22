import React, { useContext } from 'react'
import './SearchBlock.scss'
import searchLogo from '../../assets/search.png'
import closeItem from '../../assets/close.png'
import { appContext } from '../../App'
function SearchBlock() {
    
    const {searchValue,setSearchValue} = useContext(appContext)

    return (
        <div className="root">
            <img className="searchIcon" src={searchLogo} alt=""

            />
            <input
                value={searchValue}
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                className="input"  placeholder='Поиск пиццы...' />
            {searchValue && <img onClick={()=>{
                setSearchValue("")
            }}
            className='close-item' src={closeItem} alt="" />}
        </div>
    )
}

export default SearchBlock
