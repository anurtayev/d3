import './styles'
import * as d3 from 'd3'

const data = [
  {'Hazard Category': 'Confined Space', 'Incidents': 70},
  {'Hazard Category': 'Hotwork', 'Incidents': 15},
  {'Hazard Category': 'Occupational Health', 'Incidents': 34},
  {'Hazard Category': 'Road Risk', 'Incidents': 3}
]

const outerWidth = 760
const outerHeight = 400
const margin = { left: 90, top: 30, right: 30, bottom: 30 }

const xColumn = 'Hazard Category'
const yColumn = 'Incidents'

const innerWidth = outerWidth - margin.left - margin.right
const innerHeight = outerHeight - margin.top - margin.bottom

const svg = d3.select('body').append('svg')
  .attr('width', outerWidth)
  .attr('height', outerHeight)

const g = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

const xScale = d3
  .scaleBand()
  .rangeRound([0, innerWidth])
  .padding(0.1)
  .domain(data.map(d => d[xColumn]))

const yScale = d3
  .scaleLinear()
  .range([innerHeight, 0])
  .domain([0, d3.max(data, d => d[yColumn])])

g.append('g')
  .attr('class', 'axis axis--x')
  .attr('transform', 'translate(0,' + innerHeight + ')')
  .call(d3.axisBottom(xScale))

g.append('g')
  .attr('class', 'axis axis--y')
  .call(d3.axisLeft(yScale).ticks(10))
  .append('text')
  .attr('transform', 'rotate(-90)')
  .attr('y', 6)
  .attr('dy', '0.71em')
  .attr('text-anchor', 'end')
  .text(yColumn)

g.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => xScale(d[xColumn]))
  .attr('y', d => yScale(d[yColumn]))
  .attr('width', xScale.bandwidth())
  .attr('height', d => innerHeight - yScale(d[yColumn]))
