import Header from './assets/Header'
import Main from './assets/Main'
import { CartProvider } from './assets/components/useContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  )
}

export default App
