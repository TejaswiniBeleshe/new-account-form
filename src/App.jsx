import { useState } from 'react'

import './App.css'
import ProfilePage from './components/Profile/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProfilePage/>
    </>
  )
}

export default App
