
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import { AppProvider } from "./components/contextStore"
import Shop from "./components/shops/Shop"

function App() {

  // const { productItems } = Data
  // const { shopItems } = Sdata

  // //Step 2 :
  // const [CartItem, setCartItem] = useState([])
  // const [isopenCategory, setOpenCategory] = useState(false)
  // //Step 4 :
  // const activeMenuCategory = () => {
  //   setOpenCategory(true);
  // }
  // const addToCart = (product) => {

  //   const productExit = CartItem.find((item) => item.id === product.id)

  //   if (productExit) {
  //     setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
  //   } else {

  //     setCartItem([...CartItem, { ...product, qty: 1 }])
  //   }
  // }


  // const decreaseQty = (product) => {

  //   const productExit = CartItem.find((item) => item.id === product.id)


  //   if (productExit.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id))
  //   } else {

  //     setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  //   }
  // }

  return (
    <>
      <AppProvider>
        {/* <Router>
          <Header CartItem={CartItem}  />
          <Switch>
            <Route path='/' exact>
              <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}  />
            </Route>
            <Route path='/home' exact>
              <Shop shopItems={shopItems} addToCart={addToCart} />
            </Route>
            <Route path='/cart' exact>
              <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
            </Route>
          </Switch>
          <Footer />
        </Router> */}
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact>
              <Pages />
            </Route>
            <Route path='/home' exact>
              <Shop />
            </Route>
            <Route path='/cart' exact>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AppProvider>
    </>
  )
}

export default App
