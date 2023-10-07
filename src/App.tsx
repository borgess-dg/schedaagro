import { Routes } from './routes'

import 'leaflet/dist/leaflet.css'
import 'leaflet-draw'
import './App.css'
import { SideBar } from './components/SideBar'
import { Header } from './components/Header'



function App() {

  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Routes></Routes>
    </>
  )
}

export default App
