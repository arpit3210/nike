import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";




ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
  <ThirdwebProvider activeChain="ethereum" clientId="368a56e3e42740372b4a0d2e6b2accd7">

      <App />
  </ThirdwebProvider>
    </React.StrictMode>
  ,
)
