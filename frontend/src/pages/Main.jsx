import { Route, BrowserRouter, Routes } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import BlogDetails from "./BlogDetails"
import BlogList from "./BlogList"


const Main = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/media" element={<><HeroSection/><BlogList /></>} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
