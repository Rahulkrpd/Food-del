
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from "react-router-dom"

import StoreContextPrvoider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextPrvoider>
      <App />
    </StoreContextPrvoider>
  </BrowserRouter>
)
