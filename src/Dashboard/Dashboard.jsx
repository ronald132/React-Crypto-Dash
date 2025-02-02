import React from 'react'
import Page from '../Shared/Page'
import styled from 'styled-components'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import PriceChart from './PriceChart'

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-templates-columns: 1fr 3fr;
`

function Dashboard() {
  return <Page name="dashboard">
    <PriceGrid />
    <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
    </ChartGrid>
  </Page>
}

export default Dashboard