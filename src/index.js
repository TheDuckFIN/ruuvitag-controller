require('dotenv').config()

const express = require('express')

const TagListener = require('./tag-listener')
const InfluxDBController = require('./influxdb-controller')
const TagStore = require('./tag-store')

const port = process.env.PORT || 5000
const server = express()

TagListener.on('ruuvitag', (tagData) => {
  console.log('Received signal from tag ' + tagData.id)
  InfluxDBController.writeTagData(tagData)
  TagStore.saveTagData(tagData)
})

server.get('/', (req, res) => {
  res.send('Hello world!')
})

server.get('/api/tags', (req, res) => {
  res.json(TagStore.foundTags)
})

server.listen(port, () => console.log('Server listening in port ' + port))
