import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "../Pages/MainPage"

export const RouterPaths = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
  )
}