const DatasetCore = require('./DatasetCore')

const rdf = {
  dataset: quads => {
    return new DatasetCore(quads)
  }
}

module.exports = rdf
