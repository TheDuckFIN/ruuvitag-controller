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
      measurement: 'temperature',
      fields: {
        value: Influx.FieldType.FLOAT
      },
      tags: [
        'tag_id'
      ]
    },
    {
      measurement: 'humidity',
      fields: {
        value: Influx.FieldType.FLOAT
      },
      tags: [
        'tag_id'
      ]
    },
    {
      measurement: 'pressure',
      fields: {
        value: Influx.FieldType.FLOAT
      },
      tags: [
        'tag_id'
      ]
    }
  ]
})

const SAVED_FIELDS = ['temperature', 'humidity', 'pressure']

const writeTagData = (tagData) => {
  const { id } = tagData

  db.writePoints(
    SAVED_FIELDS.map(field => ({
      measurement: field,
      tags: { tag_id: id },
      fields: { value: tagData[field] }
    }))
  )
    .then(() => console.log('Successfully wrote measurements from tag ' + id + ' to InfluxDB'))
    .catch(e => console.log('Error writing data to InfluxDB: ' + e))
}

module.exports = {
  writeTagData
}
