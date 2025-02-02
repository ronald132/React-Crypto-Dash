import React from 'react'
import styled, {css} from 'styled-components'
import { fontSizeBig } from '../Shared/Styles'
import { SelectableTile } from '../Shared/Tile'
import { fontSize3, greenBoxShadow } from '../Shared/Styles'
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid'
import { AppContext } from '../App/AppProvider'

const JustifyRight = styled.div`
    justify-self: right;
`
const JustifyLeft = styled.div`
    justify-self: left;
`

const TickerPrice = styled.div`
    ${fontSizeBig}
`

const ChangePct = styled.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`

const numberFormat = number => {
    return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        display: grid;
        ${fontSize3}
        grid-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
        justify-item: right;
    `}

    ${props => props.currentFavorite && css`
        ${greenBoxShadow}
        pointer-events: none;
    `}
`

function ChangePercent({data}){
    return (
        <JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0 ? "true" : "false"}>
                {numberFormat(data.CHANGEPCT24HOUR)}%
            </ChangePct>
        </JustifyRight>
    )
}

function PriceTileElem({sym, data, currentFavorite, setCurrentFavorite}) {
  return (
    <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
        <CoinHeaderGridStyled>
            <div> {sym} </div>
            <ChangePercent data={data} />
        </CoinHeaderGridStyled>
        <TickerPrice>
            ${numberFormat(data.PRICE)}
        </TickerPrice>
    </PriceTileStyled>
  )
}

function PriceTileCompact({sym, data, currentFavorite, setCurrentFavorite}) {
    return (
      <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
          <JustifyLeft> {sym} </JustifyLeft>
          <ChangePercent data={data} />
          <div>
            ${numberFormat(data.PRICE)}
          </div>
      </PriceTileStyled>
    )
  }

function PriceTile({price, index}){
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 5 ? PriceTileElem : PriceTileCompact;
    return (
        <AppContext.Consumer>
            {
                ({currentFavorite, setCurrentFavorite}) => 
                    <TileClass 
                        sym={sym}
                        data={data}
                        currentFavorite={currentFavorite === sym}
                        setCurrentFavorite={() => setCurrentFavorite(sym)}
                    >
                    </TileClass>
            }
        </AppContext.Consumer>
    )
}

export default PriceTile