import DatasetCore from './DatasetCore.js'

const rdf = {
  dataset: quads => {
    return new DatasetCore(quads)
  }
}

export default rdf
