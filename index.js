'use strict'

// 1
let weatherMap = new Map([
  ['London', '10'],
  ['Moscow', '7'],
  ['Paris', '14'],
])

weatherMap = new Map([...weatherMap].map(el => el.reverse()))
console.log(weatherMap)

// 2
const city = ['town1', 'town2', 'town3', 'town1']
const uniqueCity = new Set(city)
console.log(uniqueCity.size)

const array = [['a', 1], ['b', 2]]
const mapArray = new Map(array)
mapArray.delete('a')
console.log(mapArray) 