const Influx = require('influx')

const { INFLUXDB_URL, INFLUXDB_DATABASE } = process.env

if (!INFLUXDB_URL || !INFLUXDB_DATABASE) {
  console.log('InfluxDB environment variable(s) missing, please check .env file.')
  process.exit(1)
}

const db = new Influx.InfluxDB({
  host: INFLUXDB_URL,
  database: INFLUXDB_DATABASE,
  schema: [
    {
      measurement: 'ruuvitag_measurement',
      fields: {
        temperature: Influx.FieldType.FLOAT,
        humidity: Influx.FieldType.FLOAT,
        pressure: Influx.FieldType.FLOAT
      },
      tags: [
        'tag_id'
      ]
    }
  ]
})

const writeTagData = (tagData) => {
  const { id, temperature, humidity, pressure } = tagData

  const measurementData = {
    tags: { tag_id: tagData.id },
    fields: { temperature, humidity, pressure }
  }

  db.writeMeasurement('ruuvitag_measurement', [measurementData])
    .then(() => console.log('Successfully wrote measurements from tag ' + id + ' to InfluxDB'))
    .catch(e => console.log('Error writing data to InfluxDB: ' + e))
}

module.exports = {
  writeTagData
}
