import { Map } from './components/Map'

import 'leaflet/dist/leaflet.css'
import './App.css'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

function App() {

  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <Map></Map>
    </>
  )
}

export default App
