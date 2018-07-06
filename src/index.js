const TagListener = require('./tag-listener')

const listener = new TagListener()

listener.on('ruuvitag', (tagData) => {
  console.log(tagData)
})
