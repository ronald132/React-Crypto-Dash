import styled, {css} from 'styled-components'

import React from 'react'

const ImageCoin = styled.img`
    height: 50px;
    ${props => props.spotlight && css`
        height: 200px;
        margin: auto;
        display: block;
    `}
`

function CoinImage({coin, spotlight}) {
  return (
    <ImageCoin
        spotlight={spotlight}
        alt={coin.CoinSymbol}
        src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  )
}

export default CoinImage