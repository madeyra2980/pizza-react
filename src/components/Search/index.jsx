import React from 'react'
import './SearchBlock.scss'
import searchLogo from '../../assets/search.png'
import closeItem from '../../assets/close.png'
function SearchBlock({ searchValue, setSearchValue }) {
    return (
        <div className="root">
            <img className="searchIcon" src={searchLogo} alt=""

            />
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="input" type="" placeholder='Поиск пиццы...' />
            {searchValue && <img onClick={()=>{
                setSearchValue("")
            }}
            className='close-item' src={closeItem} alt="" />}
        </div>
    )
}

export default SearchBlock
