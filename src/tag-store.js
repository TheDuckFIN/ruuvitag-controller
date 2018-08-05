const foundTags = {}

const saveTagData = (tagData) => {
  const { id, temperature, pressure, humidity } = tagData
  foundTags[id] = { temperature, pressure, humidity, updated: Date.now() }
}

module.exports = {
  saveTagData,
  foundTags
}
