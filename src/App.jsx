import { useState } from 'react'

import './App.css'
import WrapperParent from './components/WrapperParent/WrapperParent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ProfilePage/> */}
     <WrapperParent/>
    </>
  )
}

export default App
