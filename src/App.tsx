import Hero from "./components/organisms/Hero"
import ProductList from "./components/organisms/ProductList"
import StoreTemplate from "./components/templates/StoreTamplate"


function App() {

  return (
    <StoreTemplate>
      <Hero />
      <ProductList />
    </StoreTemplate>
  )
}

export default App
