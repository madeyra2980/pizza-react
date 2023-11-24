import React, { useContext, useRef, useCallback, useState } from 'react';
import './SearchBlock.scss';
import searchLogo from '../../assets/search.png';
import closeItem from '../../assets/close.png';
import debounce from 'lodash/debounce';
import { appContext } from '../../App';

function SearchBlock() {
  const [value, setValue] = useState('');

  const {searchValue,setSearchValue } = useContext(appContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('')
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className="root">
      <img className="searchIcon" src={searchLogo} alt="" />
      <input
        ref={inputRef}
        value={value}
        type="text"
        onChange={onChangeInput}
        className="input"
        placeholder="Поиск пиццы..."
      />
       
       {searchValue&&( <img
          onClick={() => {
            onClickClear();
          }}
          className="close-item"
          src={closeItem}
          alt=""
        />
       )}   
    </div>
  );
}

export default SearchBlock;
