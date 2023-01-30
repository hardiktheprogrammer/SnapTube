import React, { components } from 'react'
import { useState } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: '20px',
        text: 'center',
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShodow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      
      <IconButton type="submit  ">
        
        <Search />
        
      </IconButton>
      
    </Paper>
  )
}

export default SearchBar
