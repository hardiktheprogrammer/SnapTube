// import { categories} from '@mui/icons-material'
import React, { components } from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
const selectedCategory = 'New'
const Sidebar = ({selectedCategory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      // animation: AnimationEffectTiming,
      height: { sx: 'auto', md: '90%' },

      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory
        (category.name)}
        
        style={{
          background: category.name === selectedCategory && '#e85d56',
          
          color:'white'   

        }}
        key={category.name} 
      >
        <span style= {{color: category.name === selectedCategory ? 'white':'yellow'}}>
          
          
        {category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
)
export default Sidebar
