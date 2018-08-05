const foundTags = {}

const knownTags = {
  '8ac2447cd1ee435e9f73eaa162cd3cee': 'Parveke',
  '0b111d2ab40643a0b8cc0145ca44310f': 'Makkari',
  '362f5cffb4fa43e5afc49701c748984c': 'Olkkari'
}

const saveTagData = (tagData) => {
  const { id, temperature, pressure, humidity } = tagData
  foundTags[id] = {
    temperature,
    pressure,
    humidity,
    name: knownTags[id],
    updated: Date.now()
  }
}

module.exports = {
  saveTagData,
  foundTags
}
