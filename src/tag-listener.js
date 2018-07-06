const noble = require('noble')
const { EventEmitter } = require('events')
const parseTag = require('./ruuvitag-parser')

class TagListener extends EventEmitter {
  constructor () {
    super()
    noble.on('stateChange', this.onBluetoothStateChange)
    noble.on('discover', this.onDeviceDiscover.bind(this))
  }

  onBluetoothStateChange (state) {
    const poweredOn = state === 'poweredOn'
    if (poweredOn) {
      noble.startScanning([], true)
    } else {
      noble.stopScanning()
    }
    console.log(`Bluetooth scanning: ${poweredOn ? 'ON' : 'OFF'}`)
  }

  onDeviceDiscover (device) {
    if (device.advertisement && device.advertisement.manufacturerData) {
      const { manufacturerData } = device.advertisement
      // check if it's a ruuvitag
      if (manufacturerData[0] === 0x99 && manufacturerData[1] === 0x04) {
        const { id } = device
        const tagData = parseTag(manufacturerData)
        this.emit('ruuvitag', { id, tagData })
      }
    }
  }
}

module.exports = TagListener
