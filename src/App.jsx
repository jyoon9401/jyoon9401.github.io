import { useState } from 'react'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { SidebarProvider } from './components/SidebarContext/SidebarContext'
import { Home } from './components/Home/home'

function App() {

  return (
    <SidebarProvider>
      <div className={styles.App}>
        <Sidebar />
        <Home />
      </div>
  </SidebarProvider>
  )
}

export default App
