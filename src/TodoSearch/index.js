import React from "react";
import './TodoSearch.css';
import { FaSearch } from "react-icons/fa";
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearch" >
     <FaSearch className="icon"/>
    
    <input placeholder="Huevo" className="input"
    value={searchValue}
    onChange={onSearchValueChange}
    ></input>

    
    
    </div>
     

   
  );
}

export { TodoSearch };