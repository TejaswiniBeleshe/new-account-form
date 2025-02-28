import { useState } from 'react'

import './App.css'
import ProfilePage from './components/Profile/ProfilePage'
import BusinessInfo from './components/BusinessInfo/BusinessInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ProfilePage/> */}
     <BusinessInfo/>
    </>
  )
}

export default App
