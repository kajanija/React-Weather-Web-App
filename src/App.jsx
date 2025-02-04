import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import './index.css'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Cities from './pages/Cities'
import Map from './pages/Map'
import Settings from './pages/Settings'
import PageWrapper from './components/PageWrapper';

function App() {
  const location = useLocation();

  return (
    <div className='relative min-h-screen pb-30 sm:pb-6 sm:grid sm:grid-cols-[80px_1fr] sm:gap-5 bg-primary p-6 '>
      <Sidebar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/cities" element={<PageWrapper><Cities /></PageWrapper>} />
            <Route path="/map" element={<PageWrapper><Map /></PageWrapper>} />
            <Route path="/settings" element={<PageWrapper><Settings /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
    </div>
  )
}

export default App
