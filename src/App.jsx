import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Pages
import CreateProduct from "./pages/CreateProduct"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import SignUpPage from "./pages/SIgnUpPage"

import NavBar from "./components/NavBar"
import FooterComp from "./components/FooterComper"

const App = () => {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={< HomePage/>}/>
        <Route path="/login" element={< LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/create-product"element={<CreateProduct/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <FooterComp/>
    </Router>
    </> 
  )
}

export default App
