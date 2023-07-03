import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { MainPage } from "../Pages/main/MainPage"
import { Navbar } from "../Components/Navbar/Navbar"
import { CartPage } from "../Pages/cart/CartPage"
import { CartContextProvider } from "../context/CartContext"

export const RouterPaths = () => {
  return (
    <BrowserRouter>
    <CartContextProvider>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="*" element={<Navigate replace to='/h' />}/>
            <Route path="/cart" element={<CartPage />}/>
        </Routes>
        </CartContextProvider>
    </BrowserRouter>
  )
}