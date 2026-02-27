import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import BlogDetails from "./BlogDetails"
import BlogList from "./BlogList"


const Main = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/media" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/" element={<Navigate to="/media" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main
