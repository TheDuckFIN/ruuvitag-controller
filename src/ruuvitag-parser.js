/*
 * Supports parsin of ruuvitag data format 5 (RAW mode)
 */

const unSign8Bit = (signed) => {
  return signed & 0x80 ? -1 * (signed & 0x7f) : signed
}

const unSign16Bit = (signed) => {
  return signed & 0x8000 ? -1 * (signed & 0x7fff) : signed
}

const parseV3 = (manufacturerData) => {
  const humidity = manufacturerData[3] * 0.5
  const temperature = unSign8Bit(manufacturerData[4]) + manufacturerData[5] / 100
  const pressure = ((manufacturerData[6] << 8 | manufacturerData[7]) + 50000) / 100
  const acceleration = {
    x: unSign16Bit(manufacturerData[8] << 8 | manufacturerData[9]),
    y: unSign16Bit(manufacturerData[10] << 8 | manufacturerData[11]),
    z: unSign16Bit(manufacturerData[12] << 8 | manufacturerData[13])
  }
  const battery = manufacturerData[14] << 8 | manufacturerData[15]
  return { humidity, temperature, pressure, acceleration, battery }
}

const parseTag = (manufacturerData) => {
  const dataFormatVersion = manufacturerData[2]
  if (dataFormatVersion === 0x03) {
    return parseV3(manufacturerData)
  } else if (dataFormatVersion === 0x05) {
    // TODO: implement this when V5 is mainstream (currently pre-release in v2.2.2)
    console.log('Data in v5 format which is not supported yet')
    return null
  } else {
    console.log('Unknown data format')
    return null
  }
}

module.exports = parseTag
