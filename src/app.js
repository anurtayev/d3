import './styles'
import * as d3 from 'd3'
import {scaleLinear} from 'd3-scale'

const data2 = {
  legends: {
    keysAxis: 'Hazard Category',
    valuesAxis: 'Total'
  },
  data: {
    'Confined Space': 70,
    'Hotwork': 15,
    'Occupational Health': 34,
    'Road Risk': 3
  }
}

const data = [4, 8, 15, 16, 23, 42, 66, 1, 33, 44, 55]

const x = scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420])

d3
  .select('body')
  .append('div')
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .style('width', (d) => x(d) + 'px')
  .style('background-color', 'red')
  .text(d => d)
