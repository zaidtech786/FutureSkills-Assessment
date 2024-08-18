import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import SearchCard from './Components/SearchCard'
import Cards from './Components/Cards'
import Modal from './Components/Modal'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [data,setData] = useState([]);

  return (
    <>
       <Navbar setIsOpen = {setIsOpen} isOpen = {isOpen}/>
       <SearchCard data = {data} setData={setData}/>
       {
        isOpen
        ?
        <Modal setIsOpen = {setIsOpen} isOpen = {isOpen} data = {data} setData={setData}/>
        :
        <></>
       }
       {/* <Cards/> */}
    </>
  )
}

export default App
