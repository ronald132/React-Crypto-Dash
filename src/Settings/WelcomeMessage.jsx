import React from 'react'
import { AppContext } from '../App/AppProvider'

function WelcomeMessage() {
  return (
    <AppContext.Consumer>
        {
            ({firstVisit}) => firstVisit ? <div>
                Welcome to Ron CryptoDash, please select your favorite coins to being.
            </div> : null
        }
    </AppContext.Consumer>
  )
}

export default WelcomeMessage