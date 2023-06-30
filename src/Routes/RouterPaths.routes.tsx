import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "../Pages/main/MainPage"
import { Navbar } from "../Components/Navbar/Navbar"
import { CartPage } from "../Pages/cart/CartPage"

export const RouterPaths = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/" element={<MainPage />}/>
            <Route path="/cart" element={<CartPage />}/>
        </Routes>
    </BrowserRouter>
  )
}