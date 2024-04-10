import React from 'react'
import Page from '../Shared/Page'
import WelcomeMessage from './WelcomeMessage'
import CoinGrid from './CoinGrid'
import ConfirmButton from './ConfirmButton'
import Search from './Search'

function Settings() {
  return <Page name="settings">
    <WelcomeMessage />
    <CoinGrid topSection />
    <ConfirmButton />
    <Search />
    <CoinGrid />
  </Page>
}

export default Settings