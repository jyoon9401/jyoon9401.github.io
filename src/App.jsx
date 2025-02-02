import { useState } from 'react'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { SidebarProvider } from './components/SidebarContext/SidebarContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '/src/pages/Home/Home.jsx'
import { About } from '/src/pages/About/About.jsx'
import { Experience } from './pages/Experience/Experience'
import { Skills } from './pages/Skills/Skills'
import { Contact } from './pages/Contact/Contact'

function App() {

  return (
    <SidebarProvider>
      <div className={styles.App}>
        <BrowserRouter>
        <Sidebar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/experience' element={<Experience />}></Route>
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  </SidebarProvider>
  )
}

export default App