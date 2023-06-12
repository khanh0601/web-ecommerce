import { createContext } from "react";
import Sdata from "./MainPage/Sdata";
import Data from "./Data"
import { useState } from "react";
export const Appcontext = createContext();
export const AppProvider = ({ chidren }) => {
  const { productItems } = Data
  const { shopItems } = Sdata
  const [CartItem, setCartItem] = useState([])
  const [isopenCategory, setOpenCategory] = useState(false)
  const activeMenuCategory = () => {
    setOpenCategory(!isopenCategory);
  }
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <Appcontext.Provider value={{ productItems, shopItems, setCartItem, addToCart, decreaseQty, CartItem, activeMenuCategory, isopenCategory }}>
      {chidren}
    </Appcontext.Provider>
  )
}