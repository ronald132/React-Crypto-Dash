import React from 'react'
import { AppContext } from '../App/AppProvider'
import styled from 'styled-components'
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`

function getLowerSectionCoins(coinList, filteredCoins){
    return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100);
}

function getCoinsToDisplay(coinList, topSection, favorites, filterCoins){
    return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}


function CoinGrid({topSection}) {
  return (
    <AppContext.Consumer>
        {
            ({coinList, favorites, filteredCoins}) => (
                <CoinGridStyled>
                    {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => 
                        <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />  )}
                </CoinGridStyled>
            )
        }
    </AppContext.Consumer>
  )
}

export default CoinGrid