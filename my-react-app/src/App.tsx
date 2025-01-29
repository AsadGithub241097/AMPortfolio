import { useState } from 'react'
import TopNavbar from './components/navbar/Navbar'
import SoftwareEngineerProfile from './components/SelfIntro/SelfIntroCantaner'
import WorkExperiance from './components/WorkExperiance/workExperiance'
import ExampleProject from './components/ExProject/ExampleProject'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <TopNavbar/>
      <SoftwareEngineerProfile/>
      <WorkExperiance/>
      <ExampleProject/>
    </>
  )
}

export default App
