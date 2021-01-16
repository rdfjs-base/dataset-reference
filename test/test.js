const datamodelFactory = require('@rdfjs/data-model')
const datasetFactory = require('..')
const test = require('@rdfjs/dataset/test')

const rdf = {
  ...datamodelFactory,
  ...datasetFactory
}

test(rdf)
