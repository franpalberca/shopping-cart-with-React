import { Title } from "./Components/header"
import { ProductsAndCart } from "./Components/products"

function App() {


  return (
    <div>
      <div className='header'>
        <Title />
      </div>
      <div className='main-div'>
        <ProductsAndCart />
      </div>
    </div>
  )
}

export default App
