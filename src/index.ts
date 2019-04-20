import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import * as _ from 'lodash'
const mapboxApiKey = 'pk.eyJ1IjoibWljaGFlbGd1aWxkMTMiLCJhIjoiY2p1cG0xYjl3MTZzeDQwcG52amt1c3dzeiJ9.nUFRPa2QZtIL4vTvGP5AmA'

mapboxgl.accessToken = mapboxApiKey
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-77.009003, 38.889931],
  zoom: 12
})

const birdApi = 'https://gbfs.bird.co/dc'

const getData = async (url: string , filterPath: string) => {
  const data = await fetch(url, { method: "GET", mode: "no-cors"})
  console.log(data)
  const filteredData = _.get(data, filterPath, [])
  console.table(filteredData)
}

getData(birdApi, 'data.bikes')