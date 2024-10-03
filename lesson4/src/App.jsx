import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Comics from './components/Comics'
import CharacterDetails from './components/CharacterDetails'
import BrowseCharacters from './components/BrowseCharacters'
import NavigationBar from './components/NavigationBar'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className="app-container">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/characters" element={<BrowseCharacters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />          
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App