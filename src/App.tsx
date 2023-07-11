import { Route, Routes } from "react-router-dom"
import { HomePages } from "./pages/HomePages"
import { CssBaseline } from "@mui/material"
import Mg from "./pages/Mg"
import Landing from "./pages/Landing"
import { Navbar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer"


function App() {
  
  return (
    <>
      <CssBaseline />
     
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/imagenes" element={<Mg />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
      <Footer />
    </>
    
  )
}

export default App
