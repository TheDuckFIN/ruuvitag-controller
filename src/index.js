const TagListener = require('./tag-listener')

TagListener.on('ruuvitag', (tagData) => {
  console.log(tagData)
})
