import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import { Tile } from '../Shared/Tile'
import CoinImage from '../Shared/CoinImage'

const SpotLightName = styled.h2`
    text-align: center;
`

function CoinSpotlight() {
  return (
    <AppContext.Consumer>
        {
            ({currentFavorite, coinList}) =>
                <Tile>
                    <SpotLightName> {coinList[currentFavorite].CoinName}</SpotLightName>
                    <CoinImage spotlight coin={coinList[currentFavorite]} />
                </Tile>
        }
    </AppContext.Consumer>
  )
}

export default CoinSpotlight