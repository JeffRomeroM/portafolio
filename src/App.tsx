import { Route, Routes } from "react-router-dom"
import { HomePages } from "./pages/HomePages"
import { CssBaseline } from "@mui/material"
import Landing from "./pages/Landing"
import { Navbar } from "./components/navbar/Navbar"


function App() {
  
  return (
    <>
      <CssBaseline />
     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </>
    
  )
}

export default App
