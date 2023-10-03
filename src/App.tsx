import Header from './assets/Header'
import Main from './assets/Main'
import Modal from './assets/components/Modal'
import { CartProvider } from './assets/components/useContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
      <Modal />
    </CartProvider>
  )
}

export default App
