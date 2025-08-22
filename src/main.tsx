import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'dockview/dist/styles/dockview.css'
import { BarsCore } from 'bars-frontend-core'
import { ConfigurationRoutes } from './routes'
import { MenuSections } from './menuSections'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BarsCore disableAuth={true} routes={ConfigurationRoutes} menuSections={MenuSections}/>
  </React.StrictMode>,
)
