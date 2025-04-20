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
      <main 
      style={{ minHeight: "calc(100vh - 140px)" }}
      className="container d-flex flex-column justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={< HomePage/>}/>
          <Route path="/login" element={< LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/create-product"element={<CreateProduct/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <FooterComp/>
    </Router>
    </> 
  )
}

export default App
