import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <input type="text" 
        placeholder=' Find your dream..' 
        className=' focus:outline-none h-[2rem] rounded-full  px-1 caret-gray-200'> 
      </input>
    </div>
  )
}

export default SearchBar
