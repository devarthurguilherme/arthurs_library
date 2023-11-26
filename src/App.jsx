import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <h1 className="text-red-400">Hello World!</h1>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
