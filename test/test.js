import datamodelFactory from '@rdfjs/data-model'
import datasetFactory from '../index.js'
import test from '@rdfjs/dataset/test/index.js'

const rdf = {
  ...datamodelFactory,
  ...datasetFactory
}

test(rdf)
