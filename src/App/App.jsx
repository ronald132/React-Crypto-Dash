import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './AppLayout'
import { AppProvider } from './AppProvider'
import AppBar from './AppBar'
import Content from '../Shared/Content'
import Settings from '../Settings/Settings'
import Dashboard from '../Dashboard/Dashboard'
import isPropValid from "@emotion/is-prop-valid";
import {StyleSheetManager} from 'styled-components'


function shouldForwardProp(propName, target){
  if (typeof target === 'string'){
    return isPropValid(propName);
  }

  return true;
}

function App() {
  return (
    <AppLayout>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </StyleSheetManager>
    </AppLayout>
  )
}

export default App
