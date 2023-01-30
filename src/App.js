import React, { components } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import ReactDOM from 'react-dom'
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  SearchBar,
  Sidebar,
  

} from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        // render video page
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/Search/:searchTerm" element={<SearchFeed />} />
        <Route path="/Channel/:id" element={<ChannelDetail />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App
