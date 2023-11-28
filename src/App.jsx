import { Outlet } from "react-router-dom"

import Navigation from "./components/Navigation"



function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
