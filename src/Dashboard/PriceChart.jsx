import React from 'react'
import { AppContext } from '../App/AppProvider'
import {Tile} from '../Shared/Tile'
import ChartSelect from './ChartSelect'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsConfig from "./HighChartsConfig";
import highchartsTheme from "./HighChartsTheme";

function PriceChart() {
  Highcharts.setOptions(highchartsTheme);
  return (
    <AppContext.Consumer>
      {
        ({historical, changeChartSelect}) => 
          <Tile>
              <ChartSelect defaultValue="months" onChange={e => changeChartSelect(e.target.value)}>
                <option value="days"> Days </option>
                <option value="weeks"> Weeks </option>
                <option value="months"> Months </option>
              </ChartSelect>
              {historical ? <HighchartsReact
                highcharts={Highcharts}
                options={highchartsConfig(historical)} /> : <div> Loading historical data </div>}
          </Tile>
      }
    </AppContext.Consumer>
  )
}

export default PriceChart