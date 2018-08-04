require('dotenv').config()

const TagListener = require('./tag-listener')
const InfluxDBController = require('./influxdb-controller')

TagListener.on('ruuvitag', (tagData) => {
  console.log('Received signal from tag ' + tagData.id)
  InfluxDBController.writeTagData(tagData)
})
